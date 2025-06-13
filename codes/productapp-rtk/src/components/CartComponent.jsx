import React, { useContext } from 'react'

import { Button, Container } from 'react-bootstrap';
import CartRow from './CartRow'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/features/CartSlice';
export default function CartComponent() {
   let {cartItems, total} = useSelector(state => state.cart)
   let dispatch = useDispatch();
   return (
    <Container>
      {
        cartItems.map(product => <CartRow  product={product} key={product.id}/>)
      }
      <div className='row'>
        <div className='col-md-8'>
            &nbsp;
        </div>
         <div className='col-md-4'>
            Total {total}
        </div>
      </div>
      <div className='row'>
        <div className='col-md-8'>
            &nbsp;
        </div>
         <div className='col-md-4'>
            <Button variant='warning' onClick={() => dispatch(clearCart())}>Checkout</Button>
        </div>
      </div>
    </Container>
  )
}
