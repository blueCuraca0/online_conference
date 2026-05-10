const { RtcTokenBuilder, RtcRole } = require('agora-access-token');

// Returns an RTC token for a publisher joining a channel identified by a string uid (userAccount type).
const generateAgoraToken = (channel, uid, expireSeconds = 3600) => {
  const { APP_ID, APP_CERTIFICATE } = process.env;
  const privilegeExpireTime = Math.floor(Date.now() / 1000) + expireSeconds;
  return RtcTokenBuilder.buildTokenWithAccount(APP_ID, APP_CERTIFICATE, channel, uid, RtcRole.PUBLISHER, privilegeExpireTime);
};

module.exports = generateAgoraToken;
