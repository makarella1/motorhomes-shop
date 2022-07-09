import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import motorhomesService from '../../services/motorhomesService';

const initialState = {
  motorhome: null,
  isLoading: false,
  isError: false,
  message: '',
  errors: null,
};

export const getMotorhome = createAsyncThunk(
  'motorhome/getMotorhome',
  async (id, { rejectWithValue }) => {
    try {
      return await motorhomesService.getMotorhome(id);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createMotorhome = createAsyncThunk(
  'motorhome/createMotorhome',
  async (data, { rejectWithValue }) => {
    try {
      return await motorhomesService.createMotorhome(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const motorhomeSlice = createSlice({
  name: 'motorhome',
  initialState,
  reducers: {
    reset: () => initialState,
    resetErrors: (state) => {
      state.errors = initialState.errors;
    },
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
    builder.addCase(createMotorhome.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(createMotorhome.fulfilled, (state) => {
      state.isLoading = false;
      state.errors = null;
    });
    builder.addCase(createMotorhome.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errors = action.payload;
    });
  },
});

export const { reset, resetErrors } = motorhomeSlice.actions;

export default motorhomeSlice.reducer;
