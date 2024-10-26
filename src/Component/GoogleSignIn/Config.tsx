import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
     apiKey: "AIzaSyAbzoYPN-J39gpOIFO2siPidh71xD8yq5c",
     authDomain: "react-c5f15.firebaseapp.com",
     projectId: "react-c5f15",
     storageBucket: "react-c5f15.appspot.com",
     messagingSenderId: "726746318749",
     appId: "1:726746318749:web:98e33fbee0aa6d1697d174",
     measurementId: "G-4ZG9M3YB0S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
export const db = getFirestore(app);
