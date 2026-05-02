require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const express = require('express');

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
  if (error) {
    const status = error.code === 'PGRST116' ? 404 : 400;
    return res.status(status).json({ error: error.message });
  }
  res.json(data);
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

app.get('/conferences', async (_req, res) => {
  const result = await supabase.from('conferences').select('*');
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
