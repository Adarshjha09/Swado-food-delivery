// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
 authDomain: "swado-food-delivery.firebaseapp.com",
  projectId: "swado-food-delivery",
  storageBucket: "swado-food-delivery.firebasestorage.app",
  messagingSenderId: "65074110891",
  appId: "1:65074110891:web:2cf768c03d3b9d32f972ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}