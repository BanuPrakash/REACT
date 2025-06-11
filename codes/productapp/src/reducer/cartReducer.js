export default function cartReducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            const product = {...action.payload};
            let item = {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                qty: 1,
                amount: product.price
            }

            let total = state.total + item.amount;
            return {
                cartItems: [...state.cartItems, item],
                total,
                quantity: state.quantity + 1
            }
        case 'INCREMENT':
            return state;
        case 'DECREMENT':
            return state;
        case 'CLEAR_CART':
            return {
                cartItems: [],
                total: 0,
                quantity: 0
            }
    }

}