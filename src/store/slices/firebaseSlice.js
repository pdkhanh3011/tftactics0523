import { createSlice } from "@reduxjs/toolkit";
import tftVersionConfig from "tftVersionConfig.js";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

function initAllFirebaseApps() {
  let data = {};
  for (const version in tftVersionConfig.allApi) {
    const app = initializeApp(
      tftVersionConfig.allApi[version].firebaseProjectConfig,
      version
    );
    const auth = getAuth(app);
    const db = getFirestore(app);
    const storage = getStorage(app);

    data[version] = { auth, db, storage };
  }
  return data;
}

const firebaseSlice = createSlice({
  name: "firebase",
  initialState: {
    allFirebaseApps: initAllFirebaseApps(),
  },
  reducers: {},
});

export default firebaseSlice;
