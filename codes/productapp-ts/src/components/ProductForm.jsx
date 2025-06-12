import React, { useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// Controlled Components
// export default function ProductForm() {
//   let [title, setTitle] = useState("");
//   let [price, setPrice] = useState(0);
//  console.log("re-renders");
//   function onsubmit() {
//     let product = {
//       title,
//       price,
//       image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
//      category: "men's clothing"
//     }
//     axios.post("http://localhost:1234/products", product)
//     .then(response => {
//       console.log(response);
//     })
//   }
//   return (
//     <div>
//       <h1>Product Form</h1>
//       <form>
//         Title <input type='text' onChange={(evt) => setTitle(evt.target.value)} /> <br />
//         Price <input type='number' onChange={(evt) => setPrice(+evt.target.value)} /> <br />
//         <Button onClick={onsubmit}>Add Product</Button>
//       </form>
//     </div>
//   )
// }

// uncontrolled component
export default function ProductForm() {
  let navigate = useNavigate();
  let titleRef = useRef(); // reference , pointer
  let priceRef = useRef();

  function onsubmit() {
    let product = {
      title: titleRef.current.value,
      price: +priceRef.current.value,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      category: "men's clothing"
    }
    axios.post("http://localhost:1234/products", product)
      .then(response => {
        console.log(response);
        navigate("/");
      })
  }
  return (
    <div>
      <h1>Product Form</h1>
      <form>
        Title <input type='text' ref={titleRef} /> <br />
        Price <input type='number' ref={priceRef} /> <br />
        <Button onClick={onsubmit}>Add Product</Button>
      </form>
    </div>
  )
}
