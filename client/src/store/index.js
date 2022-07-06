import { configureStore } from '@reduxjs/toolkit';

import motorhomesSlice from './slices/motorhomesSlice';

export const store = configureStore({
  reducer: {
    motorhomes: motorhomesSlice,
  },
});
