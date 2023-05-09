import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import championsService from "services/champions";
import itemsService from "services/items";
import synergysService from "services/synergys";
import teamcompsService from "services/teamcomps";

export const getData = createAsyncThunk(
  "api/getData",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const selectedVersion = state.version.versionName;
    const allFirebaseApps = state.firebase.allFirebaseApps;
    const currentDb = allFirebaseApps[selectedVersion].db;

    const champions = championsService.getAllChampions(currentDb);
    const synergys = synergysService.getAllSynergys(currentDb);
    const items = itemsService.getAllItems(currentDb);
    const teamcomps = teamcompsService.getAllTeamComps(currentDb);
    try {
      const data = await Promise.all([champions, synergys, items, teamcomps]);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const apiSlice = createSlice({
  name: "api",
  initialState: {
    championsData: [],
    synergysData: [],
    itemsData: [],
    teamcompsData: [],
    isSuccess: false,
    message: "",
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [getData.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.championsData = payload[0];
      state.synergysData = payload[1];
      state.itemsData = payload[2];
      state.teamcompsData = payload[3];
      state.isSuccess = true;
    },
    [getData.rejected]: (state, { payload }) => {
      state.message = payload;
      state.isLoading = false;
      state.isSuccess = false;
    },
  },
});

export const { initAllFirebaseApps } = apiSlice.actions;

export default apiSlice;
