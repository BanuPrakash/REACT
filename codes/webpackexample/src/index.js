
import add, { subtract } from "./lib";
import Product from "./Product";

let product = new Product("iPhone", 89000.00);

console.log(product.getName(), product.getPrice());
console.log(add(4, 5));
console.log(subtract(50, 1));

let React = {
    createElement: (tag, props, ...children) => {
        var element = { tag, props: { ...props, children } }
        return element
    }
}
// JSX
let ProductCard = <div className="card">
    <h1 className="card-header">iPhone</h1>
    <h3>Rs.  89000.00</h3>
</div>

console.log(ProductCard)

function render(element, container) {
    console.log(element.tag);
    if (['string', 'number'].includes(typeof element)) {
        console.log(element)
        container.appendChild(document.createTextNode(String(element)));
        return;
    }
    let domElement = document.createElement(element.tag); //div, h1
    if (element.props) {
        if (element.props.children)
            element.props.children.forEach(child => render(child, domElement));
    }
    container.appendChild(domElement);
    console.log(container);
}
render(<ProductCard />, document.getElementById("root"));