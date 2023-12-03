
import { initializeApp } from "firebase/app";
 
 import firebase from 'firebase/compat/app';
 import 'firebase/compat/auth';
 import 'firebase/compat/firestore';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCxl9apzdV-RaYqsT3s0puuL1juBUIfyFo",
  authDomain: "application-hosting-50833.firebaseapp.com",
  projectId: "application-hosting-50833",
  storageBucket: "application-hosting-50833.appspot.com",
  messagingSenderId: "923700217748",
  appId: "1:923700217748:web:095fb7e5da740490bff181"
};

// Use this to initialize the firebase App
 const firebaseApp=firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth};
export default { db };






























// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCxl9apzdV-RaYqsT3s0puuL1juBUIfyFo",
//   authDomain: "application-hosting-50833.firebaseapp.com",
//   projectId: "application-hosting-50833",
//   storageBucket: "application-hosting-50833.appspot.com",
//   messagingSenderId: "923700217748",
//   appId: "1:923700217748:web:095fb7e5da740490bff181"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);




