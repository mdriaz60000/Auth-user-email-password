// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf2Rsm29OPOHaIwF7rz9dVLX2r1Hst1DM",
  authDomain: "auth-firebase-69aa6.firebaseapp.com",
  projectId: "auth-firebase-69aa6",
  storageBucket: "auth-firebase-69aa6.appspot.com",
  messagingSenderId: "682064288115",
  appId: "1:682064288115:web:ed65509dd76f7579f50d06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth