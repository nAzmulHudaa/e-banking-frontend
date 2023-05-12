// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzgY6ebyOJaa_NZx-fEeR6AKNchMoF3zw",
  authDomain: "e-banking-8fcff.firebaseapp.com",
  projectId: "e-banking-8fcff",
  storageBucket: "e-banking-8fcff.appspot.com",
  messagingSenderId: "779690602207",
  appId: "1:779690602207:web:11362b4e4e22f43500836a",
  measurementId: "G-1G9RC770HT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);