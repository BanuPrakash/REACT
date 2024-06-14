import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { cartReducers } from "./features/CartSlice";
import { userReducer } from "./features/UserSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { productReducer } from "./features/ProductSlice";
import { userApi } from "./api/UserApi";
import { postsApi } from "./api/PostsApi";
import { commentsReducer } from "./features/CommentSlice";
import rootSaga from "./saga/rootSaga"; // fork all sagas

// const profile: boolean = process.env.MODE || true;

const sagaMiddleware = createSagaMiddleware();

//configureStore() of RTK instead of createStore() of redux
const store = configureStore({
    // root reducer ==> combineReducers()
    reducer: {
        user: userReducer,
        cart: cartReducers,
        products: productReducer,
        [userApi.reducerPath]: userApi.reducer,
        [postsApi.reducerPath]: postsApi.reducer,
        comments: commentsReducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(sagaMiddleware)
            .concat(userApi.middleware)
            .concat(postsApi.middleware),

    // devTools : profile
    //devTools: true default is true for window.__REDUX_DEVTOOLS_EXTENSION__() with combine()
});

sagaMiddleware.run(rootSaga); // triggers and forks all sagas

// let [name, setName] = useState();
// let [name, setName] = useState<string>(""); 
export type RootState = ReturnType<typeof store.getState>
// typesafe useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// typesafe useDispatch
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export default store;
