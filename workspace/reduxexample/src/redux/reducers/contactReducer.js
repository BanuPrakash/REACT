export default function contactReducer(state = [], action) {
    switch(action.type) {
        case 'CREATE_CONTACT':
            return [...state, {...action.payload}]
        case 'REMOVE_CONTACT':
            return state.filter(contact => contact.email !== action.payload);
        case 'CLEAR_CONTACTS':
            return [];
        default:
            return state;
    }
}