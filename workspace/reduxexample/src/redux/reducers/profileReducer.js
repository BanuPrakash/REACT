export default function profileReducer(state = {"avatar": "mypic.png", "name": "Roger"}, action) {
    switch(action.type) {
        case 'CHANGE_AVATAR':
            return state;
        default:
            return state;
    }
}