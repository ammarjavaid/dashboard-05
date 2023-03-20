import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC8oXpOUo1lTLCMSsbjbSFRLJgVzayGJAk",
  authDomain: "dashboard-05-3071d.firebaseapp.com",
  projectId: "dashboard-05-3071d",
  storageBucket: "dashboard-05-3071d.appspot.com",
  messagingSenderId: "572309418989",
  appId: "1:572309418989:web:ea2efe43f9bcde4645ede4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
