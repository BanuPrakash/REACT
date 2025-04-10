import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "../models/Product";
import { error } from "console";
import { fetchProducts } from "./api/fetchProducts";

type ProductState = {
    status : "loading" | "idle",
    error: string | null,
    list: Product[]
 }
const initialState:ProductState = {
    list: [],
    error: null,
    status: "idle"
} 

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
          state.status = "loading";
          state.list = [];
          state.error = null;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action:PayloadAction<Product[]>) => {
            state.status = "idle";
            state.list.push(...action.payload);
          });
          builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = "idle";
            state.list = [];
            state.error = "Unable to load Products!!!"
          });
      },
});

export const productReducer = productSlice.reducer;