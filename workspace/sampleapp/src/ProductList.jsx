import React, { useDeferredValue } from 'react'

export default function ProductList({products}) {
    const deferredProducts = useDeferredValue(products); // low priority
  return (
    <div>
       <h1>ProductList</h1> 
       <ul>
       {deferredProducts.map(p => <li key={p}> {p}</li>)}
       </ul>
        
    </div>
  )
}
