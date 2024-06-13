import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"userProfile",
    initialState: {"name": "Banu", "avatar": "prof.png"},
    reducers: {}
});

export const userReducer = userSlice.reducer;