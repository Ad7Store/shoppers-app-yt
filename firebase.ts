import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAoNpNMx9owEpW8Hyf-RrCV717-PhN2Iw",
  authDomain: "zaid-cef4b.firebaseapp.com",
  projectId: "zaid-cef4b",
  storageBucket: "zaid-cef4b.firebasestorage.app",
  messagingSenderId: "164572288194",
  appId: "1:164572288194:web:301261b6d36952a383575b",
  
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
