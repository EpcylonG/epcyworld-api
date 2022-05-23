const { signOut } = require("./sign-out");
const User = require("../../models/user-model");

async function login(req = {}, userClaims = {}) {

  const { email, uid } = userClaims;

  if (typeof email !== "string" || typeof uid !== "string") {
    throw new Error("Missing user claims");
  }
  
  const user = await User.findOne({
    firebase_id: uid,
  });

  if (!user) {
    throw new Error("Invalid token");
  }

  req.user = {
    email: email,
    id: user._id || uid
  };

  req.signOut = signOut;
}

module.exports = {
  login
};