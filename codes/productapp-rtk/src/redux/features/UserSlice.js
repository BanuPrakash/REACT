import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    avatar: 'mypic.png',
    name: 'Roger'
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
});

export const userReducer = userSlice.reducer