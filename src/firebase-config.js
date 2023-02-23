import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDdtDRb9yrjAUV1urp4gEZgCTsqzeQaYcI",
  authDomain: "myonlineclipboard.firebaseapp.com",
  projectId: "myonlineclipboard",
  storageBucket: "myonlineclipboard.appspot.com",
  messagingSenderId: "1056928910194",
  appId: "1:1056928910194:web:0ceddd12b6cfb040dfabeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);