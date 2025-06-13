import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    total: 0,
    quantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // state will be a clone of state in store
        addToCart: (state, action) => {
            // no need to clone
            // no need to return
            state.cartItems.push({...action.payload});
            state.quantity = state.quantity + 1;
            state.total = state.total + action.payload.price;
        },
        increment: (state) => {

        },
        clearCart: (state) => {
            state.cartItems = [];
            state.total = 0;
            state.quantity = 0;
        }
    }
});

export const {addToCart, increment, clearCart} = cartSlice.actions
export const cartReducer = cartSlice.reducer
