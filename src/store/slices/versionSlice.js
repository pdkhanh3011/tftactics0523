import { createSlice } from "@reduxjs/toolkit";

const versionSlice = createSlice({
  name: "versionSlice",
  initialState: {
    versionName: localStorage.getItem("version") || "set85",
  },
  reducers: {
    updateVersion: (state, action) => {
      state.versionName = action.payload;
    },
  },
});

export const { updateVersion } = versionSlice.actions;

export default versionSlice;
