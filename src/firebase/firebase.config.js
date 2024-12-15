// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyArad-MsgLlJbHOVfzoEn4YoPiqnvOTH8g",
//   authDomain: "job-client-7f9a2.firebaseapp.com",
//   projectId: "job-client-7f9a2",
//   storageBucket: "job-client-7f9a2.firebasestorage.app",
//   messagingSenderId: "323540077157",
//   appId: "1:323540077157:web:5a6a8d7172ecd2ec3b948c"
// };

// // Initialize Firebase

