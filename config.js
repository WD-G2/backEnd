// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics"; // maybe can use later
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGALBT22uKsZSs8Tzwg_Fiw-OE28jZJnQ",
  authDomain: "govokasi-b49e0.firebaseapp.com",
  projectId: "govokasi-b49e0",
  storageBucket: "govokasi-b49e0.appspot.com",
  messagingSenderId: "1035900540741",
  appId: "1:1035900540741:web:2d7e802dc8905bc5ed102c",
  measurementId: "G-W5P56J1E1X"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // maybe can use later

const db = getFirestore(firebaseApp);
// const blogs = db.collection('blogs');

export default db;
