import { configureStore } from "@reduxjs/toolkit";
import { cartReducers } from "./features/CartSlice";
import { userReducer } from "./features/UserSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// const profile: boolean = process.env.MODE || true;

//configureStore() of RTK instead of createStore() of redux
const store = configureStore({
    // root reducer ==> combineReducers()
    reducer: {
        user: userReducer,
        cart: cartReducers
    },
    // devTools : profile
    //devTools: true default is true for window.__REDUX_DEVTOOLS_EXTENSION__() with combine()
});


export type RootState = ReturnType<typeof store.getState>
// typesafe useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// typesafe useDispatch
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export default store;
