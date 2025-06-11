import React, { useReducer, useState } from 'react'
import countReducer from './countReducer'

let initialState = {
    count: 0
}
export default function Counter() {

    let [state, dispatch] = useReducer(countReducer, initialState);
    // dispatch to delegate action to reducer
    return (
        <div>
            Counter : {state.count}
            <button type='button'
                onClick={() => dispatch({ type: 'INCREMENT', payload: 10 })}>
                +
            </button>
            <button type='button'
                onClick={() => dispatch({ type: 'DECREMENT' })}>
                -
            </button>
            <button type='button'
                onClick={() => dispatch({ type: 'RESET' })}>
                RESET
            </button>
        </div>
    )
}
