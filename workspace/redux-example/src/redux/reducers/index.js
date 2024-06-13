import { combineReducers } from 'redux'
import ContactReducer from './ContactReducer'
import UserReducer from './UserReducer'

// root reducer
export default combineReducers({
    "contacts": ContactReducer,
    "user": UserReducer
})