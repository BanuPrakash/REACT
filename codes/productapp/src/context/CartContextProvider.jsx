import React, { createContext, useReducer } from 'react'
import cartReducer from '../reducer/cartReducer';

let CartContext = createContext();

let initialState = {
    cartItems: [],
    total: 0,
    quantity: 0
}
export default function CartContextProvider(props) {
    let [state, dispatch] = useReducer(cartReducer, initialState);
    function addToCart(product) {
        dispatch({type:'ADD_TO_CART', payload: product})
    }

    function increment(id) {
         dispatch({type:'INCREMENT', payload: id})
    }

    function clearCart() {
         dispatch({type:'CLEAR_CART'})
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