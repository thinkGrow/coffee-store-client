// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF8Chl_L-WEUWuKhOer4HXmQkGTt7gFTw",
  authDomain: "coffee-store-6a120.firebaseapp.com",
  projectId: "coffee-store-6a120",
  storageBucket: "coffee-store-6a120.firebasestorage.app",
  messagingSenderId: "732808225894",
  appId: "1:732808225894:web:f92dd0e4d8cd654c6fb9a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
