import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  const filteredMissions = [];
  const filterBy = ['mission_id', 'mission_name', 'description'];
  data.map((mission) => {
    const newMissionObject = {};
    filterBy.forEach((property) => {
      newMissionObject[property] = mission[property];
    });
    filteredMissions.push(newMissionObject);
    return newMissionObject;
  });
  return filteredMissions;
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
        mission.active = true;
      }
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      const mission = state.missions.find((mission) => mission.mission_id === missionId);
      if (mission) {
        mission.active = false;
      }
    },
  },
  extraReducers: {
    [fetchMissions.fulfilled]: (state, action) => {
      state.missions = action.payload;
    },
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
