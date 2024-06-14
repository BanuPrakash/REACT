import Product from "./Product";

export default interface Cart extends Product {
    qty: number; 
    amount:number; // price * qty
}