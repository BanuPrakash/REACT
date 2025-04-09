// Note: reducers has to return back new state,
// should not mutate the reference
// why immutable is important , later

import CartItem from "../models/CartItem";
import Product from "../models/Product";

type Action = {
    type: 'ADD_TO_CART',
    payload: Product
} | {
    type: 'INCREMENT',
    payload: number
} | {
    type: 'DECREMENT',
    payload: number
} | {
    type: 'CLEAR_CART'
}

export interface CartStateType {
    cartItems: CartItem[],
    total: number,
    quantity: number
}

export default function cartReducer(state: CartStateType, action:Action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const product = { ...action.payload }; // clone
            let item = {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                qty: 1,
                amount: product.price // price * qty tax, discount
            }

            let cartItems = state.cartItems; // ref
            // avoid state.cartItems.push(item); 
            let total = state.total += item.amount;
            return { cartItems: [...cartItems, item], total, quantity: state.quantity + 1 }
        case 'INCREMENT':
            let products = state.cartItems;
            products.forEach(p => {
                if (p.id === action.payload) {
                    p.qty++;
                    p.amount = p.price * p.qty
                }
            });
            // update the total
            // map -- transform
            // reduce -- aggregate
            let tot = products.map(p => p.amount).reduce((a1, a2) => a1 + a2, 0.0);
            return { cartItems: products, total: tot };
        case 'DECREMENT':
            return state;
        case 'CLEAR_CART':
            return {
                cartItems: [],
                total: 0,
                quantity: 0
            }
        default:
            return state;
    }
}