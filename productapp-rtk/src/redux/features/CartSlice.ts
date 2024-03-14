import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cart from "../../model/Cart";
import Product from "../../model/Product";


export interface CartState {
    items: Cart[],
    quantity: number,
    total: number
}

const initialState: CartState = {
    items: [],
    quantity: 0,
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // state will be cloned and passed as reference
        addToCart: (state, action: PayloadAction<Product>) => {
            let item = { ...action.payload, qty: 1, amount: action.payload.price };
            state.items.push(item); //no need to return
            state.quantity = state.quantity + 1;
            state.total = state.total + item.amount;
        },
        increment: (state, action: PayloadAction<number>) => {
            const item = state.items.find(p => p.id == action.payload);
            if (item?.qty) {
                item.qty++;
                item.amount = item.price * item.qty;
                state.total = state.items.map(item => item.amount).reduce((v1, v2) => v1 + v2, 0.0);
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.total = 0;
            state.quantity = 0;
        }
    }
});

export const { addToCart, increment, clearCart } = cartSlice.actions

export const cartReducer = cartSlice.reducer; // for root reducer and store