import { initializeApp, getApps, getApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPFXPIzP9AthuHmOLup687ij20av_CEq4",
  authDomain: "notion-clone-b9d4b.firebaseapp.com",
  projectId: "notion-clone-b9d4b",
  storageBucket: "notion-clone-b9d4b.firebasestorage.app",
  messagingSenderId: "276879266101",
  appId: "1:276879266101:web:d2e9dd07fcd49ea47f7c7c",
};

const app = getApps.length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

export { db };
