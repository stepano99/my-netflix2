// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZrwaD2TFBYcMcJ2mds6KEjdVkkj97V38",
  authDomain: "my-netflix-96f4f.firebaseapp.com",
  projectId: "my-netflix-96f4f",
  storageBucket: "my-netflix-96f4f.appspot.com",
  messagingSenderId: "674767286175",
  appId: "1:674767286175:web:c15d5f80c18a47c97b97aa",
  measurementId: "G-XGCP7RL1SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);