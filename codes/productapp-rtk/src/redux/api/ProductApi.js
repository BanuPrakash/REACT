import { createAsyncThunk } from '@reduxjs/toolkit'

// First, create the thunk
const fetchProducts = createAsyncThunk(
  'products/fetch',
  async () => {
    const response = await fetch('http://localhost:1234/products')

    return await response.json();
  },
);

export default fetchProducts;