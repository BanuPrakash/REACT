import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cart from "../../model/Cart";

export interface CartState {
    cartItems: Cart[],
    quantity: number,
    total: number
}

const initialState: CartState = {
    cartItems: [],
    quantity: 0,
    total: 0
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Cart>) => {
            state.cartItems.push({ ...action.payload })
        },
        increment: (state, action: PayloadAction<number>) => {
            const item = state.cartItems.find(prd => prd.id === action.payload);
            if (item?.qty) item.qty++;
            if (item?.amount) item.amount = item.price * item.qty;
            state.total = state.cartItems.map(item => item.amount).reduce((v1, v2) => v1 + v2);
        },
        clearCart: (state) => {
            state.cartItems = []; // directly using refererence, not creating clone
            state.quantity = 0;
            state.total = 0;
            // we are not returning new state
        }
    }
});

export const cartReducers = cartSlice.reducer;
export const { addToCart, increment, clearCart } = cartSlice.actions