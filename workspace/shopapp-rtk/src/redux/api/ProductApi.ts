import { createAsyncThunk } from "@reduxjs/toolkit";
import Product from "../../model/Product";

export const fetchProducts = createAsyncThunk<Product[]>(
    "products/fetch",
    async () => {
        const response = await fetch("https://fakestoreapi.com/products?limit=5");
        const data: Product[] = await response.json();
        return data;
    }
);

// dispatch(fetchProducts());

// fetchProducts.pending
// fetchProducts.fulfilled
// fetchProducts.rejected