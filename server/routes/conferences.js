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
      .select('*, conference_participants!inner(user_id)')
      .eq('code', req.query.code)
      .eq('conference_participants.user_id', req.userId)
      .single();

    if (error) return respond(res, { data: null, error });

    const agoraToken = generateAgoraToken(conference.code, req.query.connectionId);
    console.log({ channelName: conference.code, uid: req.query.connectionId, agoraToken });
    return respond(res, { data: { ...conference, token: agoraToken }, error: null });
  }

  const result = await supabase
    .from('conferences')
    .select('*, conference_participants!inner(user_id)')
    .eq('conference_participants.user_id', req.userId)
    .gte('date', new Date().toISOString());

  respond(res, result);
});

router.post('/', async (req, res) => {
  const code = crypto.randomBytes(5).toString('hex').slice(0, 10).toUpperCase();

  const result = await supabase
    .from('conferences')
    .insert({ ...req.body, creator_id: req.userId, code })
    .select()
    .single();

  if (result.data) {
    await supabase
      .from('conference_participants')
      .insert({ conference_id: result.data.id, user_id: req.userId, is_host: true });
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

module.exports = router;
