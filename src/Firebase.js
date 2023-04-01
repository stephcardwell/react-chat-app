import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJzvFgEKSprNJ7fWUUqFihHkK4zxNHbfU",
  authDomain: "react-chatapp-3fca4.firebaseapp.com",
  projectId: "react-chatapp-3fca4",
  storageBucket: "react-chatapp-3fca4.appspot.com",
  messagingSenderId: "600086952761",
  appId: "1:600086952761:web:a0edafc2dc4d75a86fc6e8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
