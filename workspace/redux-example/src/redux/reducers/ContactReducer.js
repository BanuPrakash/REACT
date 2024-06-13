export default function ContactReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_CONTACT':
            return [
                ...state,
                {...action.payload}
            ]
        case 'REMOVE_CONTACT':
            return state.filter(data => data.email !== action.payload)
        case 'CLEAR_CONTACT':
            return [];
        default: 
            return state;
    }
}