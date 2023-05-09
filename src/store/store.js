import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./slices/apiSlice";
import versionSlice from "./slices/versionSlice";
import firebaseSlice from "./slices/firebaseSlice";

const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
    version: versionSlice.reducer,
    firebase: firebaseSlice.reducer,
  },
});
export default store;
