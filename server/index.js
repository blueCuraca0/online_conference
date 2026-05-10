require('dotenv').config();
const express = require('express');
const cors = require('./middleware/cors');
const auth = require('./middleware/auth');
const usersRouter = require('./routes/users');
const conferencesRouter = require('./routes/conferences');
const agoraRouter = require('./routes/agora');

const app = express();

app.use(express.json());
app.use(cors);

app.use('/users', usersRouter);
app.use('/agora', agoraRouter);

app.use(auth);
app.use('/conferences', conferencesRouter);
app.get('/profile', (_req, res) => res.redirect('/users/profile'));

app.listen(process.env.PORT, '127.0.0.1', () => {
  console.log(`Listening to requests on port ${process.env.PORT}.`);
});
