import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import motorhomesService from '../../services/motorhomesService';

const initialState = {
  motorhomes: null,
  isLoading: false,
  isError: false,
  message: '',
};

export const getMotorhomes = createAsyncThunk(
  'motorhomes/getMotorhomes',
  async (_, { rejectWithValue }) => {
    try {
      return await motorhomesService.getMotorhomes();
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const motorhomesSlice = createSlice({
  name: 'motorhomes',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMotorhomes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMotorhomes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.motorhomes = action.payload;
    });
    builder.addCase(getMotorhomes.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.planes = null;
    });
  },
});

export default motorhomesSlice.reducer;
