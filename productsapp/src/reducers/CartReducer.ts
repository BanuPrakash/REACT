import Cart from "../model/Cart"
import Product from "../model/Product"

// Union type
type Action = {
    type: 'ADD_TO_CART',
    payload: Product
} | {
    type: 'INCREMENT',
    payload: number
} | {
    type: 'CLEAR_CART'
}

type CartState = {
    items: Cart[],
    total: number,
    quantity: number /* how many items in Cart */
}
export default function CartReducer(state: CartState, action: Action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            let prd = { ...action.payload };
            let item: Cart = {
                id: prd.id,
                title: prd.title,
                image: prd.image,
                price: prd.price,
                qty: 1,
                amount: prd.price
            }
            return {
                items: [...state.items, item],
                total: state.total + item.amount,
                quantity: state.quantity + 1
            }
        case 'INCREMENT':
            let items = state.items;
            items.forEach(item => {
                if (item.id === action.payload) {
                    item.qty++;
                    item.amount = item.qty * item.price;
                }
            });
            return {
                items,
                total: state.items.map(item => item.amount).reduce((v1, v2) => v1 + v2, 0.0),
                quantity: state.quantity
            }
        case 'CLEAR_CART':
            return {
                items: [],
                total: 0,
                quantity: 0
            }
        default: return state;
    }
}