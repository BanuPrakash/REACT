import React, { useContext } from 'react'

import { Button, Container } from 'react-bootstrap';
import CartList from './CartList';
import { useAppSelector } from '../redux/store';

export default function CartComponent() {
 let {cartItems, total} = useAppSelector(state => state.cart)
  return (
    <Container>
     {
      cartItems.map(product => <CartList key={product.id} product={product}/>)
     }
      <div className='row'>
        <div className='col-md-10'>&nbsp;</div>
        <div className='col-md-2'>Total:{total}</div>
      </div>
      <div className='row'>
        <div className='col-md-10'>&nbsp;</div>
        <div className='col-md-2'>
          <Button >Checkout</Button>
        </div>
      </div>
    </Container>
  )
}
