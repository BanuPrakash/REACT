// HOF --> OCP
function filter<T>(data:T[], predicate: (elem:T) => boolean): T[] {
     let result:T[] = [];
     data.forEach(elem => {
        if(predicate(elem)) {
            result.push(elem);
        }
     })
     return result;
}

let numbers:number[] = [5,2,3,8,9,1];

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