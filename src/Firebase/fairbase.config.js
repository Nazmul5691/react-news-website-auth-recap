// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPrBRaqcRoI2JDLTvMrsNO2cfWIw5wclI",
  authDomain: "react-news-website-auth.firebaseapp.com",
  projectId: "react-news-website-auth",
  storageBucket: "react-news-website-auth.appspot.com",
  messagingSenderId: "140046059427",
  appId: "1:140046059427:web:729e8d66bdb0d8b2a13c16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;