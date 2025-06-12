import React, { ReactNode, useEffect, useState } from 'react'
import { createContext } from 'vm'
import Product from '../model/Product';
import axios from 'axios';

let ProductContext = createContext();

type AppProps = {
    children: ReactNode
}
export default function ProductContextProvider({children}: AppProps) {
  let [products, setProducts] = useState<Product[]>([]);
  // componentDidMount
  useEffect(() => {
    // axios.get("https://fakestoreapi.com/products?limit=5")
    axios.get("http://localhost:1234/products")
    .then(response => setProducts(response.data));
  },[]);

    return (
    <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
  )
}
