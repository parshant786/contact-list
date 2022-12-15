import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD7kQMSwBm1W9O-HmSIGFiz5q7vrtK_xlQ",
  authDomain: "contact-list-46df7.firebaseapp.com",
  projectId: "contact-list-46df7",
  storageBucket: "contact-list-46df7.appspot.com",
  messagingSenderId: "278565906855",
  appId: "1:278565906855:web:ccce29f105d19861446e82",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
