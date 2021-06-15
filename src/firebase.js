import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyChojPIvmZyEWv8zuz0X5DDWqTdwuxSIjQ",
    authDomain: "fir-5ac06.firebaseapp.com",
    projectId: "fir-5ac06",
    storageBucket: "fir-5ac06.appspot.com",
    messagingSenderId: "890913785069",
    appId: "1:890913785069:web:e5beac92fc6924d636f8e4"
});

const auth = firebase.auth();

export { auth };