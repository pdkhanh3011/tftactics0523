import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./slices/apiSlice";
import versionSlice from "./slices/versionSlice";
import firebaseSlice from "./slices/firebaseSlice";
import localStorageSlice from "./slices/localStorageSlice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
    version: versionSlice.reducer,
    firebase: firebaseSlice.reducer,
    localStorage: localStorageSlice.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export default store;
