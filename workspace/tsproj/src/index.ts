import filter from "./lib";
import {max} from 'underscore';
import Compute from "./Compute";

import Person from "./Person";
let numbers:number[] = [5,2,3,52, 13, 8,9,1];

console.log("Max: " , max(numbers));

let evens = filter(numbers, (no) => no % 2 == 0);

console.log(evens);
type Product = {
   name: string;
   price: number;
   category: string
}

let products: Product[] = [
   {name: "Sony", price: 189912.44, category : "tv"},
   {name: "iPhone", price: 89912.44, category : "mobile"},
   {name: "onePlus14", price: 79912.44, category : "mobile"},
   {name: "LG", price: 159912.44, category : "tv"},
   {name: "LG Inverter AC", price: 49912.44, category : "ac"},   
]

let mobiles:Product[] = filter(products, p => p.category === 'mobile');

console.log(mobiles);

let compute:Compute = new Compute();

console.time("first");
   console.log(compute.fibanocci(34));
console.timeEnd("first");


console.time("second");
   console.log(compute.fibanocci(34));
console.timeEnd("second");

console.log("*********");

let p:Person = new Person("Warren", 54);

// @ts-ignore
if(p["error"]) {
   // @ts-ignore
   console.log(p["error"])
} else {
   console.log(p.getDetails());
}