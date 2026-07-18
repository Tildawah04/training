// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0y4SPl-ZIUVe8-zpXGO_vku4NbcgJ2nU",
  authDomain: "training-e1fe0.firebaseapp.com",
  projectId: "training-e1fe0",
  storageBucket: "training-e1fe0.firebasestorage.app",
  messagingSenderId: "572537716236",
  appId: "1:572537716236:web:e02d820c4731bc3d6bb829",
  measurementId: "G-G9XDNLZ9V0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
