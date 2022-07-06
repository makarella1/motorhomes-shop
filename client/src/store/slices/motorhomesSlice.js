import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  motorhomes: null,
  isLoading: false,
  isError: false,
  message: '',
};

const motorhomesSlice = createSlice({
  name: 'motorhomes',
  initialState,
});

export default motorhomesSlice.reducer;
