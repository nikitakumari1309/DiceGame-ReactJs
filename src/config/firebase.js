// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEWnN1qYGgqy8fZWIprhnGMyPaTYCokLE",
  authDomain: "vite-contact-3ae8e.firebaseapp.com",
  projectId: "vite-contact-3ae8e",
  storageBucket: "vite-contact-3ae8e.firebasestorage.app",
  messagingSenderId: "212054113978",
  appId: "1:212054113978:web:98a661a5f159e663b98c83"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);