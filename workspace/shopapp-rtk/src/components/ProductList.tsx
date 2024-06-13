import React, { useEffect, useState } from 'react'
import Product from '../model/Product'

import { Container } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { fetchProducts } from '../redux/api/ProductApi';

export default function ProductList() {
  const dispatch = useAppDispatch();
  let {list: products, status, error} = useAppSelector(state => state.products);

  
  // componentDidMount
  useEffect(() => {
    dispatch(fetchProducts()); // dispatch a thunk function
  }, []);

  return (
    <Container>
      <div className='row'>
        {
          (status === "loading") ? <h1>Loading Products ...</h1> :
          products && products.map(product => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </Container>
  )
}
