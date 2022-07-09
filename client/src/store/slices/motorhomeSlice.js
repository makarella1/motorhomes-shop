import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import motorhomesService from '../../services/motorhomesService';

const initialState = {
  motorhome: null,
  isLoading: false,
  isError: false,
  message: '',
};

export const getMotorhome = createAsyncThunk(
  'motorhome/getMotorhome',
  async (id, { rejectWithValue }) => {
    try {
      return await motorhomesService.getMotorhome(id);
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const motorhomeSlice = createSlice({
  name: 'motorhome',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getMotorhome.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMotorhome.fulfilled, (state, action) => {
      state.isLoading = false;
      state.motorhome = action.payload;
    });
    builder.addCase(getMotorhome.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.motorhome = null;
    });
  },
});

export const { reset } = motorhomeSlice.actions;

export default motorhomeSlice.reducer;
