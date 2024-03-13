import { ReactNode, createContext, useReducer } from "react";
import Cart from "../model/Cart";
import CartReducer from "../reducers/CartReducer";
import Product from "../model/Product";
import { useNavigate } from "react-router-dom";

type Props = {
    children: ReactNode
}

type ContextType = {
    items: Cart[],
    total: number,
    quantity: number,
    addToCart: (product:Product) => void,
    increment: (id: number) => void,
    checkout: () => void
}
export const CartContext = createContext<ContextType>({
    items: [],
    total: 0,
    quantity: 0,
    addToCart: (product:Product) => {},
    increment: (id:number) => {},
    checkout: () => {}
});

const initialState = {
    items: [],
    total: 0,
    quantity: 0
}


export default function CartContextProvider(props:Props) {
    let [state, dispatch] = useReducer(CartReducer, initialState);
    let navigate = useNavigate();
    function addToCart(product:Product) {
       dispatch({type:'ADD_TO_CART', payload: {...product}});
    }

    function increment(id:number) {
        dispatch({type:'INCREMENT', payload: id});
    }

    function checkout() {
        // write to server
        dispatch({type:'CLEAR_CART'});
        navigate('/');
    }
    return <div>
        <CartContext.Provider value={{
            items: state.items,
            total: state.total,
            quantity: state.quantity,
            addToCart,
            increment,
            checkout
        }}>
            {props.children}
        </CartContext.Provider>
    </div>
}