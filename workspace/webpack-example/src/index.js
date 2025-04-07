import filter, { add, map } from './lib'; // ESM 
import Person from './Person'

console.log(add(4, 5));

// Promise.resolve('Hello, World');

let p = new Person('Vinod', 48);
console.log(p.getName());
console.log(p.getAge());

let products = [
    { "id": `1`, "name": `iPhone`, "price": `90000`, category: 'mobile' },
    { "id": `2`, "name": `Sony Bravia`, "price": `290000`, category: 'tv' },
    { "id": `3`, "name": `Logitech `, "price": `5000`, category: 'computer' },
    { "id": `4`, "name": `Samsung Fold`, "price": `210000`, category: 'mobile' },
    { "id": `5`, "name": `LG OLED`, "price": `210000`, category: 'tv' },
    { "id": `6`, "name": `Wacom`, "price": `4500`, category: 'computer' },

];

let mobiles = filter(products, product => product.category === 'mobile');

// HOF
mobiles.forEach(function (product) {
    console.log(product.name);
});

console.log('--------------');
