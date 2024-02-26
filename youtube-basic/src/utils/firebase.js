// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxYcp_0zOi3pvzjEG2ZF76D3Bm3jdYu3w",
  authDomain: "basic-e0d97.firebaseapp.com",
  projectId: "basic-e0d97",
  storageBucket: "basic-e0d97.appspot.com",
  messagingSenderId: "657706221583",
  appId: "1:657706221583:web:326866934e75666ae6a37a",
  measurementId: "G-7K0QY4SB7H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
