import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { profileReducer } from "./profileSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { productReducer } from "./productSlice";
import { customerApi } from "./api/customerApi";
import { postsApi } from "./api/postsApi";

//configureStore instead of createStore
// by default __REDUX_DEV_TOOLS_EXTENSION__() is configured
const store = configureStore({
    reducer: {
        cart: cartReducer,
        profile: profileReducer,
        products: productReducer,
        [customerApi.reducerPath]: customerApi.reducer,
        [postsApi.reducerPath]: postsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(customerApi.middleware).concat(postsApi.middleware)
    },
});

// Adding API middleware enables caching, polling, invalidation, pre-fetching

// ReturnType infer a new type
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store;