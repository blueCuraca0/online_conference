const { Router } = require('express');
const { RtcTokenBuilder, RtcRole } = require('agora-access-token');
const generateAgoraToken = require('../lib/generateAgoraToken');

const router = Router();

const nocache = (_req, res, next) => {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
};

router.get('/rtc/:channel/:role/:tokentype/:uid', nocache, (req, res) => {
  const { channel, role: roleParam, tokentype, uid } = req.params;

  if (!channel) return res.status(400).json({ error: 'channel is required' });
  if (!uid) return res.status(400).json({ error: 'uid is required' });

  let role;
  if (roleParam === 'publisher') role = RtcRole.PUBLISHER;
  else if (roleParam === 'audience') role = RtcRole.SUBSCRIBER;
  else return res.status(400).json({ error: 'role is incorrect' });

  const expireTime = parseInt(req.query.expiry, 10) || 3600;
  const privilegeExpireTime = Math.floor(Date.now() / 1000) + expireTime;
  const { APP_ID, APP_CERTIFICATE } = process.env;

  let token;
  if (tokentype === 'userAccount') {
    token = generateAgoraToken(channel, uid, expireTime);
  } else if (tokentype === 'uid') {
    token = RtcTokenBuilder.buildTokenWithUid(APP_ID, APP_CERTIFICATE, channel, uid, role, privilegeExpireTime);
  } else {
    return res.status(400).json({ error: 'token type is invalid' });
  }

  res.json({ rtcToken: token });
});

module.exports = router;
