import React, { useReducer, useState } from 'react'
import CartReducer from './CartReducer'

const intialState = {
    items: [],
    total: 0.0
}
export default function ReducerHook() {
    let [id,setId] = useState(0);
    let [name, setName] = useState("");
    let [price, setPrice] = useState(0);
    let [state, dispatch] = useReducer(CartReducer, intialState);

    function addToCart() {
        let item = {id, name, price, amount: price, qty: 1}
        dispatch({type:'ADD_TO_CART', payload: item})
    }

    function increment() {
        dispatch({type:'INCREMENT', payload: id})
    }
    return (
        <div>
            <form>
                ID: <input type="number" onChange={(evt) => setId(+evt.target.value)} /> <br />
                Name: <input type="text" onChange={(evt) => setName(evt.target.value)}  /> <br />
                Price : <input type="number" onChange={(evt) => setPrice(+evt.target.value)} /> <br />
                <button type='button' onClick={() => addToCart()}>Add to Cart</button>
                <button type='button' onClick={() => increment()}>increment</button>
            </form>
            <h1>Cart Items</h1>
            {
                state.items.map(item => <div>
                    Name : {item.name} <br />
                    Qty: {item.qty} <br />
                    Price: {item.price} <br />
                    Amount: {item.amount} <br />
                </div>)
            }
            Total: {state.total} <br />
        </div>
    )
}
