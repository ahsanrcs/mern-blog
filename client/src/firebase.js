// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-73735.firebaseapp.com",
  projectId: "mern-blog-73735",
  storageBucket: "mern-blog-73735.appspot.com",
  messagingSenderId: "574366766210",
  appId: "1:574366766210:web:735aca70fa86f6cf04109b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

