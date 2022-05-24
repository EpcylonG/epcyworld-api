require("dotenv").config();
const admin = require("firebase-admin");

const config = {
    port: process.env.PORT,
    db: process.env.MONGO_URI
}

const firebase= {
    certConfig: {
        type: process.env.TYPE,
        project_id: process.env.PROJECT_ID,
        private_key_id: process.env.PRIVATE_KEY_ID,
        private_key: process.env.PRIVATE_KEY,
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        auth_uri: process.env.AUTH_URI,
        token_uri: process.env.TOKEN_URI,
        auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X_509_CERT_URL,
        client_x509_cert_url: process.env.CLIENT_X_509_CERT_URL
    }
};

admin.initializeApp({
    credential: admin.credential.cert(firebase.certConfig),
});
  
const auth = admin.auth();

module.exports = { config, firebase, auth };