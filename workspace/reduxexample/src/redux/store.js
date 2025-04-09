import { compose, createStore } from "redux";
import rootReducer from './reducers'; // index.js

// time travel debugging use Redux DevTool - Chrome Web Store
//__REDUX_DEVTOOLS_EXTENSION__ middleware, intercepts all actions going to store
const store = createStore(rootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;