// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvIYfsWaBXQkBySgZK2ZUspqiSGTNySXc",
  authDomain: "linkhub-7d6ac.firebaseapp.com",
  projectId: "linkhub-7d6ac",
  storageBucket: "linkhub-7d6ac.appspot.com",
  messagingSenderId: "54193657977",
  appId: "1:54193657977:web:d7d80cb3621a77bdd15ca8",
  measurementId: "G-5PRB40K9W7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const db= getFirestore(app)

export {auth,db} 