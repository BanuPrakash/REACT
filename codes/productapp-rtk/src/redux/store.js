import {configureStore} from '@reduxjs/toolkit'
import { cartReducer } from './features/CartSlice'
import { userReducer } from './features/UserSlice';
import { productReducer } from './features/ProductSlice';
import { customersApi } from './api/customerApi';

const store = configureStore({
    // root reducer
    reducer: {
        cart: cartReducer,
        profile: userReducer,
        products: productReducer,
        [customersApi.reducerPath]: customersApi.reducer
    },
    middleware:  (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(customersApi.middleware)
    
    // devTools: false
})
export default store;

// no need to compose(REDUX DEVTOOLS EXTENSION)