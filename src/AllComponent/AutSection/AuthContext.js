import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWFirK1rI7iYXa64wEnMG3qLCrGzXI2Ik",
  authDomain: "gaming-rating.firebaseapp.com",
  projectId: "gaming-rating",
  storageBucket: "gaming-rating.firebasestorage.app",
  messagingSenderId: "979783582978",
  appId: "1:979783582978:web:0d2b096b848b7f18bd2e1b",
  measurementId: "G-BBQ0QEP7JE"
};

const app = initializeApp(firebaseConfig);

// Auth export
export const auth = getAuth(app);

// Google provider export
export const provider = new GoogleAuthProvider();


