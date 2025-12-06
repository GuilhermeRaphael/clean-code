const admin = require("firebase-admin")

const serviceAccount = require("../credentials/credential.json")

const firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = firebase.firestore().collection("products");

module.exports = db;