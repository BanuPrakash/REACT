import React, { createContext, useContext, useReducer } from 'react'
import cartReducer from '../reducer/cartReducer';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

// to avoid props-drill, central placeholder for data
let CartContext = createContext();

let initialState = {
    cartItems: [],
    total: 0,
    quantity: 0
}
export default function CartContextProvider(props) {
    // let {product} = useContext(ProductContext);
    let navigate = useNavigate();
    let [state, dispatch] = useReducer(cartReducer, initialState);
    function addToCart(product) {
        dispatch({type:'ADD_TO_CART', payload: product})
    }

    function increment(id) {
         dispatch({type:'INCREMENT', payload: id})
    }

    function clearCart() {
         //place order and clear cart items
         // on successful login
         // window.sessionStorage.setItem("user", "banu@gmail.com")
         let order = {
            customer: window.sessionStorage.getItem("user"),
            items: state.cartItems,
            total: state.total
         }
         axios.post("http://localhost:1234/orders",order).then(response => {
            dispatch({type:'CLEAR_CART'});
            navigate("/");
         });
         
    }
    return (
       <CartContext.Provider value={{...state, addToCart, clearCart, increment}}>
            {props.children}
       </CartContext.Provider>
    )
}


export {
    CartContext
}