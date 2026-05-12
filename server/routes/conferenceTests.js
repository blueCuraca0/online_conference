const { Router } = require('express');
const supabase = require('../lib/supabase');
const respond = require('../lib/respond');

const router = Router();

router.get('/', async (req, res) => {
  const result = await supabase
    .from('conference_tests')
    .select('*')
    .eq('conference_id', req.query.conferenceId)
    .maybeSingle();

  console.log({result})
  respond(res, result);
});

router.patch('/', async (req, res) => {
  const { conferenceId, isCorrect } = req.body;

  const { data: current, error: fetchError } = await supabase
    .from('conference_tests')
    .select('total_answers, total_correct')
    .eq('conference_id', conferenceId)
    .single();

  if (fetchError) return respond(res, { data: null, error: fetchError });

  const result = await supabase
    .from('conference_tests')
    .update({
      total_answers: (current.total_answers ?? 0) + 1,
      total_correct: (current.total_correct ?? 0) + (isCorrect ? 1 : 0),
    })
    .eq('conference_id', conferenceId)
    .select()
    .single();

  respond(res, result);
});

router.post('/', async (req, res) => {
  const result = await supabase
    .from('conference_tests')
    .upsert(req.body, { onConflict: 'conference_id' })
    .select()
    .single();
  respond(res, result);
});

module.exports = router;
