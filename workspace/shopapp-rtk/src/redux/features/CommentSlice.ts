import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    isLoading: false,
    errors: '',
}

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        getCommentsAction: (state) => {
            state.isLoading = true;
            state.errors = '';
        },
        getCommentsSuccessAction: (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        getCommentsErrorAction: (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.errors = action.payload;
        },
    }
});

export const { getCommentsAction, getCommentsErrorAction, getCommentsSuccessAction } = commentsSlice.actions;

export const commentsReducer =  commentsSlice.reducer;