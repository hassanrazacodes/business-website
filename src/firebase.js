// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiW3tA5-PMR6VEmHbnThXFopN-P_Z3nQ8",
  authDomain: "hassan-assignment-6fe6d.firebaseapp.com",
  databaseURL: "https://hassan-assignment-6fe6d-default-rtdb.firebaseio.com",
  projectId: "hassan-assignment-6fe6d",
  storageBucket: "hassan-assignment-6fe6d.appspot.com", // Note: corrected domain here
  messagingSenderId: "613898100861",
  appId: "1:613898100861:web:2c3f1fe01e4e45a010d114",
  measurementId: "G-GCRB9CFF12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);