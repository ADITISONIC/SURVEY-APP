import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Replace with your Firebase config
  apiKey: "AIzaSyAwoMo5QEOC4iUJQdWhh-hrfL_SF0PtdLM",
  authDomain: "project-4a94a.firebaseapp.com",
  projectId: "project-4a94a",
  storageBucket: "project-4a94a.firebasestorage.app",
  messagingSenderId: "710412246705",
  appId: "1:710412246705:web:88d6a1e471c1a5b4bf8c90",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
