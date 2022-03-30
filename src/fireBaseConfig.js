import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAQMLi58jHGokWjjjvegz3jkqRS0xUYabI",
  authDomain: "fir-notes-6f387.firebaseapp.com",
  projectId: "fir-notes-6f387",
  storageBucket: "fir-notes-6f387.appspot.com",
  messagingSenderId: "136672842055",
  appId: "1:136672842055:web:27abf78d49afadf0807c62",
  measurementId: "G-NPRKGGRYE2"
};

export const app = initializeApp(firebaseConfig);