import {configureStore} from '@reduxjs/toolkit'
import { cartReducer } from './features/CartSlice'
import { userReducer } from './features/UserSlice';
import { productReducer } from './features/ProductSlice';

const store = configureStore({
    // root reducer
    reducer: {
        cart: cartReducer,
        profile: userReducer,
        products: productReducer
    },
    // devTools: false
})
export default store;

// no need to compose(REDUX DEVTOOLS EXTENSION)