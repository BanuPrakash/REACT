import { createSlice } from "@reduxjs/toolkit";
import Product from "../../model/Product";
import { fetchProducts } from "./productApi";


type ProducState = {
    list: Product[],
    error: string | null,
    status: "loading" | "idle";
}
const initialState: ProducState = {
    list: [],
    error: null,
    status: "idle"
} 

const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = "loading"
            state.error = null;
            state.list = [];
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "idle"
            state.error = null;
            state.list.push(...action.payload)
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = "idle"
            state.error = action.error.message!;
            state.list = [];
        })
    },
});

export const productReducer = ProductSlice.reducer;