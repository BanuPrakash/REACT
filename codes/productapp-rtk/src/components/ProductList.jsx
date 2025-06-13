import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap';
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import fetchProducts from '../redux/api/ProductApi';

export default function ProductList() {
  // let [products, setProducts] = useState();
  let { list: products, status, error } = useSelector(state => state.products)
  let dispatch = useDispatch();
  // componentDidMount
  useEffect(() => {
    // // axios.get("https://fakestoreapi.com/products?limit=5")
    // axios.get("http://localhost:1234/products")
    // .then(response => setProducts(response.data));
    dispatch(fetchProducts()); // dispatch Thunk
  }, []);
  return (
    <Container>
      <div className='row'>
        {
          (status === 'loading') ? <h1>Loading Products ...</h1> : products.map(product => <ProductCard product={product} key={product.id} />)

        }
      </div>
    </Container>
  )
}
