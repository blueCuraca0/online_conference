const { Router } = require('express');
const supabase = require('../lib/supabase');
const respond = require('../lib/respond');
const auth = require('../middleware/auth');

const router = Router();

// Unauthenticated — sign-up
router.post('/', async (req, res) => {
  const result = await supabase.from('users').insert(req.body).select().single();
  respond(res, result);
});

router.use(auth);

router.get('/profile', async (req, res) => {
  const result = await supabase.from('users').select().eq('id', req.userId).single();
  respond(res, result);
});

router.get('/', async (req, res) => {
  if (req.query.id) {
    const result = await supabase.from('users').select().eq('id', req.query.id).single();
    respond(res, result);
  } else {
    const result = await supabase.from('users').select('*');
    respond(res, result);
  }
});

router.patch('/', async (req, res) => {
  const result = await supabase.from('users').update(req.body).eq('id', req.userId).select().single();
  respond(res, result);
});

router.delete('/', async (req, res) => {
  const result = await supabase.from('users').delete().eq('id', req.userId).select().single();
  respond(res, result);
});

module.exports = router;
