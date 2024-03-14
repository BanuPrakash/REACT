import { configureStore } from "@reduxjs/toolkit";
import { CartState, cartReducer } from "./features/CartSlice";
import { counterReducer } from "./features/CounterSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { productReducer } from "./features/ProductSlice";
import { customerApi } from "./api/customerApi";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        counter: counterReducer,
        products: productReducer,
        [customerApi.reducerPath]: customerApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customerApi.middleware),
  
});

// data type of store state
export type RootState = ReturnType<typeof store.getState>
// typesafe useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// typesafe dispatch
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store;

/*
devTools: true ==> by default [true] ==> compose(window.__REDUX_DEVTOOLS_EXTENSION__())
reducer: {
        cart: cartReducer,
        counter: counterReducer
    }

    is similar to

    combineReducer({
        cart: cartReducer,
        counter: counterReducer
    })

     for Root Reducer
*/