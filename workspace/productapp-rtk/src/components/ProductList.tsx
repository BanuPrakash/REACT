import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';
import Product from '../models/Product';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { fetchProducts } from '../redux/api/fetchProducts';

export default function ProductList() {
    let dispatch = useAppDispatch();
    let { list: products, error, status } = useAppSelector(state => state.products);
    // let [products, setProducts] = useState<Product[]>();

    // useEffect(() => {
    //     // axios.get('https://fakestoreapi.com/products?limit=5')
    //     axios.get('http://localhost:1234/products')
    //         .then(response => {
    //             setProducts(response.data);
    //         })
    // }, []); // componentDidMount

    useEffect(() => {
        dispatch(fetchProducts()); // dispatch thunk --> Thunk middleware intercepts
    }, []);
    return (
        <div className='container'>
            <div className='row'>
                {
                    (status === "loading") ? <h1>Loading products....</h1> :
                        products && (products.map(product => <ProductCard
                            key={product.id}
                            product={product} />))
                }
            </div>

        </div>
    )
}
