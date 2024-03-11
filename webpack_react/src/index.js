import Product from "./Product"; // ES 6 Module System
import add, { subtract, multiply } from './lib';


console.log("Hello World!!!");

console.log(add(4, 5));
console.log(subtract(10, 2), multiply(2, 4));

let p = new Product("iPhone 14", 89000.00);
console.log(p.getName(), p.getPrice());

let React = {
    createElement: (tag, props, ...children) => {
        var element = { tag, props: { ...props, children } };
        console.log(element);
        return element;
    }
};

// XML, can be JavaScript XML
let book = <div className="card">
    <h1 className="heading">React Demystify</h1>
    <h4>React Documentation</h4>
</div>
console.log(book);
