import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { profileReducer } from "./profileSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

//configureStore instead of createStore
// by default __REDUX_DEV_TOOLS_EXTENSION__() is configured
const store = configureStore({
    reducer: {
        cart: cartReducer,
        profile: profileReducer
    }
});

// ReturnType infer a new type
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store;