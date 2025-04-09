import React, { createContext, useReducer } from 'react'
import cartReducer, { CartStateType } from '../reducers/cartReducer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CartItem from '../models/CartItem';
import Product from '../models/Product';

type CartContextType = {
    cartItems: CartItem[],
    total: number,
    quantity: number,
    addToCart: (product:Product) => void,
    increment: (id:number) => void,
    clearCart: () => void
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  total: 0,
  quantity: 0,
  addToCart: (product:Product) => {},
  clearCart: () => {},
  increment:( id:number) => {}  
}); // placeholder, heap area

const initialState = {
    cartItems: [],
    total: 0,
    quantity: 0
} as CartStateType;

type Props = {
    children: React.ReactNode
}

export default function CartProvider({ children }: Props) {
    const navigate = useNavigate();
    // @ts-ignore
    let [state, dispatch] = useReducer(cartReducer, initialState);
    
    function addToCart(product:Product) {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    }
    function increment(id:number) {
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
            total: state.total, 
            addToCart, increment, clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
