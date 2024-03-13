// import Product from "./Product";

export default interface Cart /*extends Product*/ {
    id: number;
    title: string;
    price: number;  
    image: string;
    qty: number,
    amount: number
}