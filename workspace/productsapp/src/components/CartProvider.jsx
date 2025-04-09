import React, { createContext, useReducer } from 'react'
import cartReducer from '../reducers/cartReducer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const CartContext = createContext(); // placeholder, heap area

const initialState = {
    cartItems: [],
    total: 0,
    quantity: 0
}

export default function CartProvider({ children }) {
    const navigate = useNavigate();
    let [state, dispatch] = useReducer(cartReducer, initialState);
    function addToCart(product) {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    }
    function increment(id) {
        dispatch({ type: 'INCREMENT', payload: id });
    }
    function clearCart() {
        // place the order, API call to server
        //window.sessionStorage.setItem("user", "banu@gmail.com")
        let order = {
            customer: window.sessionStorage.getItem("user"),
            orderDate: new Date(),
            items: state.cartItems,
            total: state.total
        }

        axios.post("http://localhost:1234/orders", order).then(response => {
            dispatch({ type: 'CLEAR_CART' });
            navigate("/");
        })

    }
    return (
        <CartContext.Provider value={{
            quantity: state.quantity,
            cartItems: state.cartItems,
            total: state.total, addToCart, increment, clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
