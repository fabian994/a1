// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyBYp4Rlj3ECtZeeDRLXgo4j4JsuMlxEN1U",

    authDomain: "ideen-a2-69a05.firebaseapp.com",

    databaseURL: "https://ideen-a2-69a05-default-rtdb.firebaseio.com",

    projectId: "ideen-a2-69a05",

    storageBucket: "ideen-a2-69a05.appspot.com",

    messagingSenderId: "713420428840",

    appId: "1:713420428840:web:998ef41d7493cdd857071d",

    measurementId: "G-LH7E8V77ZW"

};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore;
// generate & export auth object

