import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContextProvider';

export default function CartRow({product}) {
  let {id, title, image, price, qty, amount} = product;
  let {increment} = useContext(CartContext);
  return (
    <div className='row my-2'>
      <div className='col-md-2'>
        <img src={image} style={{"width":'50px'}}/>
      </div>
      <div className='col-md-2'>
        {title}
      </div>
      <div className='col-md-4'>
        <Button>-</Button>
            &nbsp; {qty} &nbsp;
         <Button onClick={() => increment(id)}>+</Button>
      </div>
      <div className='col-md-2'>Price: {price}</div>
      <div className='col-md-2'>Amount: {amount}</div>
   
    </div>
  )
}
