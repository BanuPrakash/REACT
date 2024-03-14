import { ReactNode, createContext, useEffect, useState } from "react"
import Product from "../model/Product"
import axios from "axios";

type ContextType = {
    products: Product[]
}

const ProductContext = createContext<ContextType>({
    products: []
});

type Props = {
    children: ReactNode
}
export default function ProductContextProvider(props:Props) {
    let [products, setProducts] = useState<Product[]>([]); //typesafe

    // componentDidMount
    useEffect(() => {
        axios.get('http://localhost:1234/products').then(response => {
            setProducts(response.data);
        })
    }, []);

    return <div>
        <ProductContext.Provider value={{products:products}}>
            {props.children}
        </ProductContext.Provider>
    </div>
}

export {ProductContext}