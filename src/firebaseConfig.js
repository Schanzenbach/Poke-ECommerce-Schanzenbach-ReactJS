import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMcXTBlrMta5twqLRwKyWD9H80q5v0ic4",
  authDomain: "poke-proyecto-alan-sch.firebaseapp.com",
  projectId: "poke-proyecto-alan-sch",
  storageBucket: "poke-proyecto-alan-sch.appspot.com",
  messagingSenderId: "394483089024",
  appId: "1:394483089024:web:ecfaf5638c69ef1e117065",
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
