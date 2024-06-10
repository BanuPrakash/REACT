import add, { sub } from './lib';
import { random } from 'lodash'

console.log("Welcome to Webpack!!! ", random(1, 100));

console.log("Sum ", add(4, 5));

console.log("Diff ", sub(10, 3));


// createElement is for JS object [{tag: 'h1', props: {…}}] like document.createElement() ==> DOM
// props ---> initially wiil be like attributes <img src=".." width =".."
// children
let React = {
    createElement: (tag, props, ...children) => {
        var element = { tag, props: { ...props, children } }
        console.log(element); // JS
        return element;
        // console.log(tag, children)
    }
};

// JSX
const Product = <div>
    <h1 className="card">iPhone 14</h1>
    <h4 className="details">Price : 89000.00</h4>
</div>

console.log(Product);

// DOM renderer like react-dom
function render(element, container) {
    if (['string', 'number'].includes(typeof element)) {
        container.appendChild(document.createTextNode(String(element)));
        return;
    }
    let domElement = document.createElement(element.tag); //h1, h4, div
    if (element.props) {
        Object.keys(element.props).filter(p => p !== 'children').forEach(p => {
            /// copy props
        });
        if (element.props.children) {
            element.props.children.forEach(child => render(child, domElement));
        }
        container.appendChild(domElement);
        console.log(domElement);
    }
}

render(Product, document.getElementById("root"));

