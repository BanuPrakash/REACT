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
            let prds = state.cartItems;
            prds.forEach(product => {
                if(product.id === action.payload) {
                    product.qty++;
                    product.amount = product.qty * product.price
                }
            });

            let ttl = state.cartItems.map(p => p.amount).reduce( (v1, v2) => v1 + v2)
            return {
                cartItems: prds,
                total : ttl,
                quantity: state.quantity
            };
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