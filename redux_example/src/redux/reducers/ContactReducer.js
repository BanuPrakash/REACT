export default function ContactReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_CONTACT':
            return [...state, action.payload];
        case 'REMOVE_CONTACT':
            return state.filter(contact => contact.email !== action.payload)
        case 'CLEAR_CONTACTS':
            return [];
        default:
            return state;
    }
}