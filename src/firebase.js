// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getStorage} from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAQkLIGgcdd4q0BqjM6kvgVHIK86cjO5Gc",
//   authDomain: "uploadingprofilepic.firebaseapp.com",
//   projectId: "uploadingprofilepic",
//   storageBucket: "uploadingprofilepic.appspot.com",
//   messagingSenderId: "951976389549",
//   appId: "1:951976389549:web:ed7529f3bcd4bf72580f24"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD7kQMSwBm1W9O-HmSIGFiz5q7vrtK_xlQ",
  authDomain: "contact-list-46df7.firebaseapp.com",
  projectId: "contact-list-46df7",
  storageBucket: "contact-list-46df7.appspot.com",
  messagingSenderId: "278565906855",
  appId: "1:278565906855:web:ccce29f105d19861446e82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage= getStorage(app)