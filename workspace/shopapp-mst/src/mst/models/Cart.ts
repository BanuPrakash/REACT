import {SnapshotIn, types} from 'mobx-state-tree';

export const CartItem = types.model({
    id: types.number,
    title: types.string,
    price: types.number,
    description: types.string,
    category: types.string,
    image: types.string,
    qty: types.number,
    amount: types.number
}).actions(self => ({
    increment() {

    }
}));

export const Cart = types.model({
    items: types.optional(types.array(CartItem), []),
}).actions(self => ({
    addToCart(cartItem:SnapshotIn<typeof CartItem>) {
        self.items.push(cartItem);
    },
    increment(){

    }
})).views(self => ({
    get total() {
        return self.items.map(item => item.amount).reduce((v1, v2) => v1 + v2);
    },
    get quantity() {
        return self.items.length;
    }
}))