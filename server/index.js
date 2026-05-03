require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const express = require('express');
const crypto = require('crypto');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-user-id');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

const respond = (res, { data, error }) => {
  if (error) return res.status(400).json({ success: false, data: error.message });
  res.json({ success: true, data });
};

// POST /users (sign-up) is unauthenticated — must be before the auth guard
app.post('/users', async (req, res) => {
  const result = await supabase.from('users').insert(req.body).select().single();
  respond(res, result);
});

// Auth guard for all remaining routes
app.use((req, res, next) => {
  const userId = req.headers['x-user-id'];
  if (!userId) return res.status(401).json({ error: 'Missing x-user-id header' });
  req.userId = userId;
  next();
});

app.get('/conferences', async (req, res) => {
  const result = await supabase
    .from('conferences')
    .select('*, conference_participants!inner(user_id)')
    .eq('conference_participants.user_id', req.userId);

  respond(res, result);
});

// export interface Conference {
//   name: string | null;
//   agenda: string | null;
//   date: string | null;
//   duration: number;
// 
//   id: string;
//   created_at: string;
//   creator_id: string;
//   ended_at: string | null;
//   code: string | null;
// }

app.post('/conferences', async (req, res) => {
  const secretString = crypto.randomBytes(5).toString('hex').slice(0, 10).toUpperCase();

  const result = await supabase
    .from('conferences')
    .insert({ ...req.body, creator_id: req.userId, code: secretString })
    .select()
    .single();

  if (result.data) {
    await supabase
      .from('conference_participants')
      .insert({ conference_id: result.data.id, user_id: req.userId, is_host: true });
  }
  respond(res, result);
});

app.patch('/conferences', async (req, res) => {
  const result = await supabase
    .from('conferences')
    .update(req.body)
    .eq('id', req.query.id)
    .eq('creator_id', req.userId)
    .select()
    .single();

  respond(res, result);
});

app.delete('/conferences', async (req, res) => {
  const result = await supabase
    .from('conferences')
    .delete()
    .eq('id', req.query.id)
    .eq('creator_id', req.userId)
    .select()
    .single();

  respond(res, result);
});

app.get('/profile', async (req, res) => {
  const result = await supabase.from('users').select().eq('id', req.userId).single();
  respond(res, result);
});

app.get('/users', async (req, res) => {
  if (req.query.id) {
    const result = await supabase.from('users').select().eq('id', req.query.id).single();
    respond(res, result);
  } else {
    const result = await supabase.from('users').select('*');
    respond(res, result);
  }
});

app.patch('/users', async (req, res) => {
  const result = await supabase.from('users').update(req.body).eq('id', req.userId).select().single();
  respond(res, result);
});

app.delete('/users', async (req, res) => {
  const result = await supabase.from('users').delete().eq('id', req.userId).select().single();
  respond(res, result);
});

app.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000.');
});
