import React, { useContext, useEffect } from 'react'

import ProductCard from './ProductCard';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { fetchProducts } from '../redux/features/productApi';

export default function ProductList() {
  let dispatch = useAppDispatch();
  let { list: products, error, status } = useAppSelector(state => state.products);
  useEffect(() => {
    dispatch(fetchProducts()); // thunk
  }, []);
  return (
    <div className='container'>
      <div className='row'>
        {
          (error !== null) ? <h1>Error :-(, {JSON.stringify(error)}</h1> :
            (status === "loading") ? <h1>Loading....</h1> :
              products.map(product => <ProductCard product={product} key={product.id} />)
        }
      </div>
    </div>
  )
}
