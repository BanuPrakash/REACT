import React, { createContext, useReducer, useState } from "react";
import Cart from "../model/Cart";
import { useNavigate } from "react-router-dom";
import cartReducer from "../reducers/cartReducer";

type ContextType = {
    cartItems: Cart[],
    total: number,
    quantity: number,
    addToCart: (cart: Cart) => void,
    increment: (id: number) => void,
    checkout: () => void
}

// js 
// export const cartContext = createContext();
// context is a central placeholder for data
export const CartContext = createContext<ContextType>({
    cartItems: [],
    total: 0,
    quantity: 0,
    addToCart: (cart: Cart) => { },
    increment: (id: number) => { },
    checkout: () => { }
}
);


type AppProps = {
    children: React.ReactNode
}

const initialState = {
    cartItems: [],
    total: 0,
    quantity: 0
}

export default function CartProvider({ children }: AppProps) {
    let navigate = useNavigate();
    let [state, dispatch] = useReducer(cartReducer, initialState);
    function addToCart(item: Cart) {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    }

    function increment(id: number) {
        dispatch({ type: 'INCREMENT', payload: id })
    }
    function checkout() {
        // axios.post...
        dispatch({ type: 'CLEAR_CART' });
        navigate('/');
    }
    return <CartContext.Provider value={
        {
            cartItems: state.cartItems, total: state.total, quantity: state.quantity, 
            addToCart,
            increment, 
            checkout
        }
    }>
        {children}
    </CartContext.Provider>
}