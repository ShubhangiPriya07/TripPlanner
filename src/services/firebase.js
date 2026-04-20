import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAp127rtdQfxZj9WTpLX6vw0ZQcsC_K9kc",
  authDomain: "trip-planner-520e1.firebaseapp.com",
  projectId: "trip-planner-520e1",
  storageBucket: "trip-planner-520e1.appspot.com",
  messagingSenderId: "961414358902",
  appId: "1:961414358902:web:660766e63e44180f17bc57"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);