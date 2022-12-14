import ICart from "../model/Cart";
import Product from "../model/Product";

type Action = {
    type: "ADD_TO_CART",
    payload: Product
} | 
{ type: "INCREMENT", payload: number } | 
{ type: "CLEAR_CART" }

export interface CartStateType {
    products: ICart[],
    total: number
}
export default function CartReducer(state: CartStateType, action: Action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const product = { ...action.payload }
            let item = {
                id: product.productId,
                name: product.productName,
                price: product.productPrice,
                quantity: 1,
                amount: product.productPrice,
                image: product.productImageUrl
            }
            let cartItems = state.products; // []
            let total = state.total += item.amount;
            return { products: [...cartItems, item], total }; // products:[{..}]
        case 'INCREMENT':
            let products = state.products;
            products.forEach(p => {
                if (p.id === action.payload) {
                    p.quantity++;
                    p.amount = p.price * p.quantity
                }
            });
            // update the total .... pending....

            return { products, total: state.total };
        case 'CLEAR_CART':
            return {products:[], total:0};

        default:
            return state;
    }
}