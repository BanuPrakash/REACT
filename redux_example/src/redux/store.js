import { compose, createStore } from "redux";
import rootReducer from './reducers'; // index.js


const store = createStore(rootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;


// Middleware resides between store and root reducer