import CartItem from "../model/Cart"

type ActionType = {
    type: 'ADD_TO_CART',
    payload: CartItem
} | {
    type: 'INCREMENT',
    payload: number
} | {
    type: 'CLEAR_CART'
}

type StateType = {
    cartItems: CartItem[],
    total: number,
    quantity: number /* how many items in Cart */
}

export default function cartReducer(state: StateType, action: ActionType) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                cartItems: [...state.cartItems, action.payload],
                total: state.total + action.payload.amount,
                quantity: state.quantity + 1
            }
        case 'INCREMENT': let cartItems = state.cartItems;
            cartItems.forEach(item => {
                if (item.id === action.payload) {
                    item.qty++;
                    item.amount = item.qty * item.price;
                }
            });
            return {
                cartItems,
                total: state.cartItems.map(item => item.amount).reduce((v1, v2) => v1 + v2, 0.0),
                quantity: state.quantity
            }
        case 'CLEAR_CART': return { cartItems: [], total: 0, quantity: 0 }
        default: return state;
    }
}
