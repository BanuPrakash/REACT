import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
import userReducer from "./userReducer";

export default combineReducers({
        contacts: contactReducer,
        profile: userReducer
});
