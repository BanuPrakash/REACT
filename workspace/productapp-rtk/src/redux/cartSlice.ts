import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CartItem from "../models/CartItem";
import Product from "../models/Product";

interface CartState {
    cartItems: CartItem[],
    total: number,
    quantity: number
}

const initialState: CartState = {
    cartItems: [],
    total: 0,
    quantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            // state will be a clone of original state is store sent to reducer
            // no need to clone
            state.cartItems.push({ ...action.payload, qty: 1, amount: action.payload.price });
            state.total = state.total + action.payload.price;
            state.quantity++;
        },
        increment: (state, action: PayloadAction<number>) => {
            const item = state.cartItems.find(item => item.id === action.payload)!;
            if (item?.qty) {
                item.qty++;
            }
            if (item?.amount) {
                item.amount = item.price * item.qty;
            }

            state.total = state.cartItems.map(item => item.amount).reduce((a1, a2) => a1 + a2, 0.0);
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.total = 0;
            state.quantity = 0;
        }
    }
})


export const { addToCart, increment, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;