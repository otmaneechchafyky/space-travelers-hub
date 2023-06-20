import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rockets.slice';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
  },
});

export default store;
