import {combineReducers} from 'redux';
import contactReducer from './contactReducer';
import profileReducer from './profileReducer';

// root reducer
export default combineReducers({
    contacts: contactReducer,
    profile: profileReducer
});