import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Details() {
  let [product, setProduct] = useState();

  let { id } = useParams(); // to read path parametes
  // useSearchParams() to read query parameters
  // query parameters = http://server.com/products?size=10&page=2

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data));
  }, [id]);

  return (
    <div>
      <h1>Details of Product with id: {id}</h1>
      <div>
        {product && (
          <div>
            {product.title} <br />
            {product.price} <br />
            <img src={product.image} />

          </div>
        )
        }
      </div>
    </div>
  )
}
