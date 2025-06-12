import contactReducer from "./contactReducer";
import userReducer from "./userReducer";

export default function rootReducer(){
    return combine({
        contacts: contactReducer,
        profile: userReducer
    })
}