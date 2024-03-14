import { createAsyncThunk } from "@reduxjs/toolkit";
import Product from "../../model/Product";

export const fetchProducts = createAsyncThunk<Product[]>(
    "products/fetch",
    async () => {
        const response = await fetch("http://localhost:1234/products");
        const data: Product[] = await response.json();
        return data;
    }
)

// dispatch(fetchProducts());
// as it enters async function ==> thunk triggers action "fetchProducts.pending"
// if function completes sucessfully --> thunk triggers action "fetchProducts.fullfilled"
// any exections ==> thunks triggers action "fetchProducts.rejected"