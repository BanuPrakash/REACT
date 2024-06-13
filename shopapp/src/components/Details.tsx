import React, { useEffect, useState } from 'react'
import Product from '../model/Product'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Details() {
  let [product, setProduct] = useState<Product | null>(null);
  let { id } = useParams(); // Path Parameter

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then(response => {
      setProduct(response.data);
    })
  }, []);
  
  return (
    <div>
      <h1>Product Details</h1>
      {
        product && <div>
          <img src={product.image} />
          <hr />
          Title: {product.title}
          Description : {product.description} <br />
          Price : {product.price}
        </div>
      }
    </div>
  )
}
