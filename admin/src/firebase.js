// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt7qE7LKVqrFP6inGZwulHRUCCpSzyjCs",
  authDomain: "e-commerce-site-e00b9.firebaseapp.com",
  projectId: "e-commerce-site-e00b9",
  storageBucket: "e-commerce-site-e00b9.appspot.com",
  messagingSenderId: "217271593018",
  appId: "1:217271593018:web:ab4f7c9fe55135932b2d03",
  measurementId: "G-VZ76DTR7VV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;