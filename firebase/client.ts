// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFjfygoLTc2zl-uaKeNAhjp_NQExTPG_I",
  authDomain: "hiremind-d8019.firebaseapp.com",
  projectId: "hiremind-d8019",
  storageBucket: "hiremind-d8019.firebasestorage.app",
  messagingSenderId: "385575060898",
  appId: "1:385575060898:web:62ccc3b474e214c1c61efb",
  measurementId: "G-953JF6PQYK"
};


// Initialize Firebase
const app = !getApp.length?initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app);
export const db = getFirestore(app)