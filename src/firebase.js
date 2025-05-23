// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHWaqmzFSty2kCXFDtJdRz8NXnsJsvgAg",
  authDomain: "study-buddy-7294c.firebaseapp.com",
  projectId: "study-buddy-7294c",
  storageBucket: "study-buddy-7294c.firebasestorage.app",
  messagingSenderId: "1093156428693",
  appId: "1:1093156428693:web:1fced92ff5b4a90058349c",
  measurementId: "G-JSTRSKBJWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);