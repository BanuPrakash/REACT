let product = {
    "name": "iPhone",
    "price": 89000.00,
    "updatePrice": function(p) {
        this.price = p;
    }
}

product.updatePrice(88888);

console.log(product) //works

let ref = product.updatePrice; // here context is lost

ref(7777);

console.log(product) ; // not works

ref = product.updatePrice.bind(product); // bind the context

ref(11111);
console.log(product) ; 