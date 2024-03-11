import Product from "./Product"; // ES 6 Module System
import add, {subtract, multiply} from './lib';


console.log("Hello World!!!");

console.log(add(4,5));
console.log(subtract(10,2), multiply(2,4));

let p = new Product("iPhone 14", 89000.00);
console.log(p.getName(), p.getPrice());

