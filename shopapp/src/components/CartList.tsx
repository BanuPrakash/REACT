import React, { useContext } from 'react'
import Cart from '../model/Cart'
import { Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

type Props = {
  product: Cart
}
export default function CartList(props: Props) {
  let {increment} = useContext(CartContext)
  let { id, title, image, price, qty, amount } = props.product;
  return (
    <div className='row'>
      <div className='col-md-2'>
        <img src={image} style={{ width: '50px' }} />
      </div>
      <div className='col-md-2'>
        {title}
      </div>
      <div className='col-md-4'>
        <Button>-</Button>
        &nbsp;
        {qty}
        &nbsp;
        <Button onClick={() => increment(id)}>+</Button>
      </div>

      <div className='col-md-2'>
        Price: {price}
      </div>
      <div className='col-md-2'>
        Amount: {amount}
      </div>
    </div>
  )
}
