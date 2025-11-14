// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4h11btpw0KERqv7wI_VAw2QIa0sKsbP8",
  authDomain: "pokeapi-eec57.firebaseapp.com",
  projectId: "pokeapi-eec57",
  storageBucket: "pokeapi-eec57.firebasestorage.app",
  messagingSenderId: "487387837240",
  appId: "1:487387837240:web:f434ecfaa6f492224e47cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth and db so other files can use it
export const auth = getAuth(app);
export const db = getFirestore(app);
