// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAckoTjY3YnlIT3lvgh8nMwv_ycRfacCw",
  authDomain: "puffy-calendar-166-e2c6a.firebaseapp.com",
  projectId: "puffy-calendar-166-e2c6a",
  storageBucket: "puffy-calendar-166-e2c6a.appspot.com",
  messagingSenderId: "679247206340",
  appId: "1:679247206340:web:819791adcb013a8a9df691",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
