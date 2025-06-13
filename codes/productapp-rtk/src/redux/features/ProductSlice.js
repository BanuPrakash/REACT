import { createSlice } from "@reduxjs/toolkit"
import fetchProducts from "../api/ProductApi"

const initialState = {
    status: "idle",
    error: "",
    list: []
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        //action fetchProducts.pending, fetchProducts.rejected, fetchProducts.fulfilled is triggered by Thunk
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = "loading";
            state.list = [];
            state.error = null;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = "idle";
            state.list = [];
            state.error = action.error.message;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "idle";
            state.list = action.payload;
            state.error = null;
        });
    },
})

export const productReducer = productSlice.reducer