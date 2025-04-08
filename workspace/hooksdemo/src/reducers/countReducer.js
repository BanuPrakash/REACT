// initial state ==- > { count: 0 }
export default function countReducer(state, action) {
    switch(action.type) {
        // {type: 'INCREMENT': payload: 10}
        case 'INCREMENT':
            return {
                count: state.count + action.payload
            }
        // {type: 'DECREMENT'}
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
}