const admin = require('firebase-admin');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBU9CzpqT17Ap3UUurHoHdykhR42EuIKUs",
    authDomain: "coneve-api.firebaseapp.com",
    databaseURL: "https://coneve-api-default-rtdb.firebaseio.com/",
    projectId: "coneve-api",
    storageBucket: "coneve-api.appspot.com",
    messagingSenderId: "413533266470",
    appId: "1:413533266470:web:f453f158b6a2a74ae9fce7",
    measurementId: "G-E45MFZ168S"
};

let app = admin.initializeApp(firebaseConfig, "app");

module.exports = app;