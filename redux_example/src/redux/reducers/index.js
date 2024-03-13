import { combineReducers } from "redux";
import ContactReducer from "./ContactReducer";
import ProfileReducer from "./ProfileReducer";

// Root Reducer
export default combineReducers({
    contacts: ContactReducer,
    userProfile: ProfileReducer
})