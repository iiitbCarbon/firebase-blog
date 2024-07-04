import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA_6r-YtFwr8o8v0SLZ42MmpTEENUVdx_A",
  authDomain: "filmflix-18967.firebaseapp.com",
  projectId: "filmflix-18967",
  storageBucket: "filmflix-18967.appspot.com",
  messagingSenderId: "762199807579",
  appId: "1:762199807579:web:6158852bb0ae7bdef1117e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;