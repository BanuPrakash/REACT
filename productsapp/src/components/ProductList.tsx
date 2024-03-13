import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import ProductCard from './ProductCard';

export default function ProductList() {
  let {products} = useContext(ProductContext); // ProductContext.Consumer
  return (
  <div className='container'>
      <div className='row'>
        {
          products.map(product => <ProductCard product={product} key={product.id}/>)
        }
      </div>
  </div>
  )
}
