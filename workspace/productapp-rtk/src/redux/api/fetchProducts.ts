import { createAsyncThunk } from "@reduxjs/toolkit";
import Product from "../../models/Product";

export const fetchProducts  = createAsyncThunk<Product[]>(
    "products/fetch",
    async () => {
        // pending
        const response = await fetch(`http://localhost:1234/products`);
        const data: Product[] = await response.json();
        return data; // fulfilled
        // fetch(`http://localhost:1234/products`).then(response => response.json()).then(data => return data);
    }
);