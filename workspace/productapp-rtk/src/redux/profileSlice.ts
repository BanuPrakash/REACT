import { createSlice } from "@reduxjs/toolkit"

type ProfileState ={
    avatar: string,
    name: string
}
const initialState : ProfileState = {
    avatar: "pic.png",
    name: "Roger"
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {}
});

export const profileReducer = profileSlice.reducer;