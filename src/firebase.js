// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMmt1ftOxT0Fzmaulwt_UOCdWjnS70D7c",
  authDomain: "free-chat-a8baa.firebaseapp.com",
  projectId: "free-chat-a8baa",
  storageBucket: "free-chat-a8baa.appspot.com",
  messagingSenderId: "642900321426",
  appId: "1:642900321426:web:91b9d1d4dd5963db09324b",
  measurementId: "G-7HMHCRV9QF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
