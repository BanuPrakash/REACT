import React from 'react'
import Cart from '../model/Cart'
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '../redux/store';
import {increment} from '../redux/features/CartSlice'

type Props = {
  product: Cart
}
export default function CartList(props: Props) {
  const dispatch = useAppDispatch();
  
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
        <Button onClick={() => dispatch(increment(id))}>+</Button>
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
