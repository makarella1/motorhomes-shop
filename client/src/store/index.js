import { configureStore } from '@reduxjs/toolkit';

import motorhomesSlice from './slices/motorhomesSlice';
import motorhomeSlice from './slices/motorhomeSlice';

export const store = configureStore({
  reducer: {
    motorhomes: motorhomesSlice,
    motorhome: motorhomeSlice,
  },
});
