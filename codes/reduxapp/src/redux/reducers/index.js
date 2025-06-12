import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
import userReducer from "./userReducer";

export default function rootReducer(){
    return combineReducers({
        contacts: contactReducer,
        profile: userReducer
    })
}