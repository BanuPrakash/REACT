// interface CartItem extends Product 
type CartItem = {
    id: number;
    title: string;
    price: number;
    description?: string;
    category: string;
    image: string;
    qty: number;
    amount: number
}

export default CartItem