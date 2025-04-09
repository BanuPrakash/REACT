import React, { useContext } from 'react'

import { Button, Container } from 'react-bootstrap';
import CartList from './CartList';
export default function Cart() {
 
  return (
    <Container>
      <div className='row'>
        {/* {
          cartItems.map(product => <CartList key={product.id} product={product}/>)
        } */}
      </div>
      <div className='row'>
        <div className='col-md-8'>&nbsp;</div>
        <div className='col-md-4'>Total : {0}</div>
      </div>
      <div className='row'>
        <div className='col-md-8'>&nbsp;</div>
        <div className='col-md-4'>
          <Button variant='success' >Checkout</Button>
        </div>
      </div>
    </Container>
  )
}
