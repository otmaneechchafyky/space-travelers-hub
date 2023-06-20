import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async (_, thunkApi) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  return data;
});

const initialState = {
  missions: [],
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      const mission = state.missions.find((mission) => mission.mission_id === missionId);
      if (mission) {
        mission.reserved = true;
      }
    },
  },
  extraReducers: {
    [fetchMissions.fulfilled]: (state, action) => {
      state.missions = action.payload;
    },
  },
});

export default missionsSlice.reducer;
