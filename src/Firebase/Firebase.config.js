// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiUKYiREGWsi25q_bWEpxJi7jIrfSz_Q0",
  authDomain: "code-easy-client.firebaseapp.com",
  projectId: "code-easy-client",
  storageBucket: "code-easy-client.appspot.com",
  messagingSenderId: "125464043837",
  appId: "1:125464043837:web:7dc311514a65b4e8776554",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;