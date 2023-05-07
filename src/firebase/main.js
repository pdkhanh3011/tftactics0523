import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcO-VX-cMtdI0tDY6kvjViZ9d76o-MlwI",
  authDomain: "tftactics-gg-2.firebaseapp.com",
  databaseURL: "https://tftactics-gg-2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tftactics-gg-2",
  storageBucket: "tftactics-gg-2.appspot.com",
  messagingSenderId: "38082388668",
  appId: "1:38082388668:web:dd5204cb7adb1c3150a6b9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

export { auth, db, storage };
