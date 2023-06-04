import { createSlice } from "@reduxjs/toolkit";

const localStorageSlice = createSlice({
  name: "localStorage",
  initialState: {
    lang: localStorage.getItem("lang") || "vi",
  },
  reducers: {}
});

export default localStorageSlice;
