import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
  let { id } = useParams(); // path parameters
  let [product, setProduct] = useState();
  useEffect(() => {
    axios.get(`http://localhost:1234/products/${id}`)
      .then(response => setProduct(response.data));
  }, [id]);


 return (
    product &&  (
      <div>
        <h1>Details of {id}</h1>
        <img src = {product.image}  />
      </div>
    )
  )

}
