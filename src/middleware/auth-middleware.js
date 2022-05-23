const { auth } = require("../utils");

async function authMiddleware(req, res, next) {

  try {
    const bearerToken = await auth.getAuthToken(req.headers);
    const userClaims = await auth.verifyAuthToken(bearerToken);
    await auth.login(req, userClaims);
    
    next();
  } catch (error) {
    return res.status(401).send({
      data: null,
      error: 'Unauthorized'
    });
  }

}

module.exports = { authMiddleware };