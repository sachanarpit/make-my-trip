
import "firebase/auth";
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcdno_e-6yWXoS2XKt5tca8IV01c0Kn7Q",
  authDomain: "make-my-trip-masai.firebaseapp.com",
  projectId: "make-my-trip-masai",
  storageBucket: "make-my-trip-masai.appspot.com",
  messagingSenderId: "103456618041",
  appId: "1:103456618041:web:090eae67dbdb4f735bbfe8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;