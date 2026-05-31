const { Router } = require('express');
const crypto = require('crypto');
const supabase = require('../lib/supabase');
const respond = require('../lib/respond');
const generateAgoraToken = require('../lib/generateAgoraToken');

const router = Router();

router.get('/', async (req, res) => {
  if (req.query.code && req.query.connectionId) {
    const { data: conference, error } = await supabase
      .from('conferences')
      .select('*, conference_participants!inner(user_id, is_host)')
      .eq('code', req.query.code)
      .eq('conference_participants.user_id', req.userId)
      .single();

    if (error ) return respond(res, { data: null, error });
    if (conference === undefined) return respond(res, { data: null, error: "No matching conference found." });

    const agoraToken = generateAgoraToken(conference.code, req.query.connectionId);
    console.log({ channelName: conference.code, uid: req.query.connectionId, agoraToken });
    return respond(res, { data: { ...conference, token: agoraToken }, error: null });
  }

  const { data, error } = await supabase
    .from('conferences')
    .select('*, conference_participants!inner(user_id, is_host)')
    .eq('conference_participants.user_id', req.userId)
    .gte('date', new Date(new Date().toDateString()).toISOString())
    .order('date', { ascending: true });

  if (error) return respond(res, { data: null, error });

  const ids = data.map((c) => c.id);
  const { data: participants } = await supabase
    .from('conference_participants')
    .select('conference_id, user_id, users(id, name, connection_id)')
    .in('conference_id', ids);

  const participantsMap = (participants || []).reduce((acc, row) => {
    if (!acc[row.conference_id]) acc[row.conference_id] = [];
    acc[row.conference_id].push({ userId: row.user_id, name: row.users?.name ?? null, connectionId: row.users?.connection_id ?? null });
    return acc;
  }, {});

  const enriched = data.map((c) => ({
    ...c,
    participants: participantsMap[c.id] ?? [],
    participant_count: (participantsMap[c.id] ?? []).length,
  }));
  respond(res, { data: enriched, error: null });
});

router.post('/', async (req, res) => {
  const code = crypto.randomBytes(5).toString('hex').slice(0, 10).toUpperCase();

  const result = await supabase
    .from('conferences')
    .insert({ 
      name: req.body.name,
      date: req.body.date,
      duration: req.body.duration,
      agenda: req.body.agenda,
      creator_id: req.userId, 
      code
    })
    .select()
    .single();

  if (result.data) {
    const { participantIds } = req.body;
    
    const rows = [
      { conference_id: result.data.id, user_id: req.userId, is_host: true },
      ...(Array.isArray(participantIds) ? participantIds.map((uid) => ({ conference_id: result.data.id, user_id: uid, is_host: false })) : []),
    ];

    await supabase.from('conference_participants').insert(rows);
  }

  respond(res, result);
});

router.patch('/', async (req, res) => {
  const result = await supabase
    .from('conferences')
    .update(req.body)
    .eq('id', req.query.id)
    .eq('creator_id', req.userId)
    .select()
    .single();

  respond(res, result);
});

router.delete('/', async (req, res) => {
  const result = await supabase
    .from('conferences')
    .delete()
    .eq('id', req.query.id)
    .eq('creator_id', req.userId)
    .select()
    .single();

  respond(res, result);
});

router.delete('/participants', async (req, res) => {
  const result = await supabase
    .from('conference_participants')
    .delete()
    .eq('conference_id', req.query.conferenceId)
    .eq('user_id', req.userId)
    .eq('is_host', false)
    .select()
    .single();

  respond(res, result);
});

module.exports = router;
