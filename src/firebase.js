// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCfYx4SYx1DCQRij0qJlp_daY-PFP_4m6g",

  authDomain: "hp-quiz-d522c.firebaseapp.com",

  projectId: "hp-quiz-d522c",

  storageBucket: "hp-quiz-d522c.appspot.com",

  messagingSenderId: "887008058957",

  appId: "1:887008058957:web:45a60a56712af5e96f0604",

  measurementId: "G-CKRSLENVMX"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);