import React, { createContext, useState } from "react";
import Cart from "../model/Cart";

type ContextType = {
    cartItems: Cart[],
    total: number,
    quantity: number,
    addToCart: (cart: Cart) => void,
    increment: (id: number) => void,
    checkout: () => void,
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
export default function CartProvider({ children }: AppProps) {
    let [items, setItems] = useState<Cart[]>([]);
    function addToCart(cart: Cart) {
        console.log("added ", cart);
    }
    function increment(id: number) {

    }
    function checkout() {

    }
    return <CartContext.Provider value={
        {
            cartItems: items, total: 0, quantity: 0, addToCart,
            increment, checkout
        }
    }>
        {children}
    </CartContext.Provider>
}