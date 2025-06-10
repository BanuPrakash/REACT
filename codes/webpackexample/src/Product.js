export default class Product {
    name; //state
    price; // state
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
}