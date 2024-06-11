// HOF --> OCP
function filter(data, predicate) {
    var result = [];
    data.forEach(function (elem) {
        if (predicate(elem)) {
            result.push(elem);
        }
    });
    return result;
}
var numbers = [5, 2, 3, 8, 9, 1];
var odds = filter(numbers, function (no) { return no % 2 == 0; });
console.log(odds);
var products = [
    { name: "Sony", price: 189912.44, category: "tv" },
    { name: "iPhone", price: 89912.44, category: "mobile" },
    { name: "onePlus14", price: 79912.44, category: "mobile" },
    { name: "LG", price: 159912.44, category: "tv" },
    { name: "LG Inverter AC", price: 49912.44, category: "ac" },
];
var mobiles = filter(products, function (p) { return p.category === 'mobile'; });
console.log(mobiles);
