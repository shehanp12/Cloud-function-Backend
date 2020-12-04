const admin = require('firebase-admin');
const serviceAccount = require('../../boardinghub-firebase-adminsdk-agq64-f47a2152e7.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export default admin;
