
import { useState } from 'react';
import './App.css';
import { generateProducts } from './data';
import ProductList from './ProductList';
import DogImage from './DogImage';

const dummyProducts = generateProducts();

function filterProducts(txt) {
  return dummyProducts.filter(p => p.includes(txt));
}

function App() {
  const [txt, setText] = useState("");
  const filteredProducts = filterProducts(txt);

  // let [count, setCount] = useState(0);
  return (
    <div>
      <DogImage /> 
      <input type='text' onChange={(evt) => setText(evt.target.value)} />
      <ProductList products = {filteredProducts}/>
    </div>
    // <div>
    //   <h1>fiber demo</h1>
    //   <span>Count = {count}</span>
    //   <button type="button" onClick={() => setCount(count + 1)}> + </button>
    // </div>
  );
}

export default App;
