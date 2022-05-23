const { auth } = require("../../config");

function verifyIdToken(token) {
  return auth.verifyIdToken(token);
}

module.exports = { verifyIdToken };