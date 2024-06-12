import React, { useEffect, useState } from 'react'
import Product from '../model/Product'
import axios from 'axios';
import { Container } from 'react-bootstrap';
import ProductCard from './ProductCard';

export default function ProductList() {
  let [products, setProducts] = useState<Product[]>();
  
  // componentDidMount
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=5").then(response => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Container>
      <div className='row'>
        {
          products && products.map(product => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </Container>
  )
}
