import add, {subtract} from "./lib";
import Product from "./Product";

let product = new Product("iPhone", 89000.00);

console.log(product.getName(), product.getPrice());
console.log(add(4,5));
console.log(subtract(50,1));

