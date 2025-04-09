import React, { createContext, useReducer } from 'react'
import cartReducer from '../reducers/cartReducer';

export const CartContext = createContext(); // placeholder, heap area

const initialState = {
    cartItems: [],
    total: 0
}

export default function CartProvider({ children }) {
    let [state, dispatch] = useReducer(cartReducer, initialState);
    function addToCart(product) {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    }
    function increment(id) {
        dispatch({ type: 'INCREMENT', payload: id });
    }
    function clearCart() {
        // place the order, API call to server
        dispatch({ type: 'CLEAR_CART' })
    }
    return (
        <CartContext.Provider value={{
            cartItems: state.cartItems,
            total: state.total, addToCart, increment, clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
