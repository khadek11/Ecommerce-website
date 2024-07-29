// src/features/product/addProductSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  product: {},
  status: 'idle',
  error: null,
};

// Async thunk to create a new product
export const createProduct = createAsyncThunk(
  'addProduct/createProduct',
  async (productData) => {
    const response = await axios.post('/api/products/create', productData);
    return response.data;
  }
);

export const addProductSlice = createSlice({
  name: 'addProduct',
  initialState,
  reducers: {
    // Add reducers for additional state management if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});



export default addProductSlice.reducer;