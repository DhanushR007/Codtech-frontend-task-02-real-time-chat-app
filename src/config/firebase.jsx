// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpS5DpAa1t_iBDzEP8JWnR6ykKlU9tqz0",
  authDomain: "chat-app-9075d.firebaseapp.com",
  projectId: "chat-app-9075d",
  storageBucket: "chat-app-9075d.firebasestorage.app",
  messagingSenderId: "845158755726",
  appId: "1:845158755726:web:19b926c6f12ae889d8c8df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
