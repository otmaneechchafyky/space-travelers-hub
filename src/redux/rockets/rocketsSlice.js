import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rocketsList: [],
  loading: true,
};

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error('Something went wrong');
    }
    const data = await resp.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      const newList = state.rocketsList.map((rocket) => {
        if (rocket.id !== rocketId) {
          return { ...rocket };
        }
        return { ...rocket, reserved: true };
      });
      state.rocketsList = newList;
    },

    cancelReserve: (state, action) => {
      const rocketId = action.payload;
      const newList = state.rocketsList.map((rocket) => {
        if (rocket.id !== rocketId) {
          return { ...rocket };
        }
        return { ...rocket, reserved: false };
      });
      state.rocketsList = newList;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchRockets.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        rocketsList: action.payload,
      }))
      .addCase(fetchRockets.rejected, (state) => ({
        ...state,
        loading: false,
      }));
  },
});

export default rocketsSlice.reducer;
export const { reserveRocket, cancelReserve } = rocketsSlice.actions;
