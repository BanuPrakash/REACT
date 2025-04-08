import React, { useReducer } from 'react'
import countReducer from '../reducers/countReducer'

let initialState = {
    count: 0
}

export default function Counter() {
    let [state, dispatch] = useReducer(countReducer, initialState);
  return (
    <div>
        Count: {state.count } <br />
        <button type="button" onClick={() => dispatch({type:'INCREMENT', payload: 10})}>
            Increment
        </button> <br />
        <button type="button" onClick={() => dispatch({type:'DECREMENT'})}>DECREMENT</button> <br />
        <button type="button" onClick={() => dispatch({type:'RESET'})}>RESET</button> <br />
    </div>
  )
}
