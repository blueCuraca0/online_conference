require('dotenv').config();
const express = require('express');
const cors = require('./middleware/cors');
const auth = require('./middleware/auth');
const usersRouter = require('./routes/users');
const conferencesRouter = require('./routes/conferences');
const conferenceTestsRouter = require('./routes/conferenceTests');
const agoraRouter = require('./routes/agora');

const app = express();

app.use(express.json());
app.use(cors);

app.use('/users', usersRouter);
app.use('/agora', agoraRouter);

app.use(auth);
app.use('/conferences', conferencesRouter);
app.use('/conference-tests', conferenceTestsRouter);
app.get('/profile', (_req, res) => res.redirect('/users/profile'));

app.listen(process.env.PORT, () => {
  console.log(`Listening to requests on port ${process.env.PORT}.`);
});
