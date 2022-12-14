// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQkLIGgcdd4q0BqjM6kvgVHIK86cjO5Gc",
  authDomain: "uploadingprofilepic.firebaseapp.com",
  projectId: "uploadingprofilepic",
  storageBucket: "uploadingprofilepic.appspot.com",
  messagingSenderId: "951976389549",
  appId: "1:951976389549:web:ed7529f3bcd4bf72580f24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage= getStorage(app)