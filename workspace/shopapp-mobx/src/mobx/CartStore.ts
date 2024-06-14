import { action, computed, makeObservable, observable } from "mobx"

export class CartItem {
    @observable
    id: number = 0;
    @observable
    title: string = "";
    @observable
    price: number = 0;
    @observable
    description: string = "";
    @observable
    category: string = "";
    @observable
    image: string = "";
    @observable
    qty: number = 0;
    @observable
    amount: number = 0; // price * qty

    constructor(id: number, title: string, price: number, description: string,
        category: string, image: string, qty: number, amount: number) {
        makeObservable(this);
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.qty = qty;
        this.amount = amount;
    }

    @action
    increment() {
        this.qty++;
        this.amount = this.price * this.qty;
    }
}

class CartStore {
    @observable
    cart: CartItem[] = []

    constructor() {
        makeObservable(this)
    }

    @action
    addToCart(item: CartItem) {
        this.cart.push(item);
    }

    @action
    increment(id: number) {
        let product = this.cart.find(p => p.id === id);
        if (product) {
            product.increment();
        }
    }
    @computed
    get total() {
        return this.cart.map(item => item.amount).reduce((v1, v2) => v1 + v2);
    }

    @computed
    get quantity() {
        return this.cart.length;
    }

}

const cartStore = new CartStore(); // singleton

export default cartStore;