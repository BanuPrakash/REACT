import { configureStore } from "@reduxjs/toolkit";
import { cartReducers } from "./features/CartSlice";
import { userReducer } from "./features/UserSlice";

//configureStore() of RTK instead of createStore() of redux
const store = configureStore({
    // root reducer ==> combineReducers()
    reducer: {
        user: userReducer,
        cart: cartReducers
    },
    //devTools: true default is true for window.__REDUX_DEVTOOLS_EXTENSION__() with combine()
});


export default store;