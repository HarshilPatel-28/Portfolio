import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBzJo-TXZs0AKg0ADB1hoOyC5wuaFeN1Aw",
  authDomain: "react-portfolio-harshil.firebaseapp.com",
  projectId: "react-portfolio-harshil",
  storageBucket: "react-portfolio-harshil.appspot.com",
  messagingSenderId: "476587797202",
  appId: "1:476587797202:web:e0db9c38be373a5be45b0b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()