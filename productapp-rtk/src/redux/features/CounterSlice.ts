import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state, action:PayloadAction<number>) => {
            state = state + action.payload
        }
    }
});

export const {increment} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;