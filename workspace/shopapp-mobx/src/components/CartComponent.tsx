import React, { useContext } from 'react'

import { Button, Container } from 'react-bootstrap';
import CartList from './CartList';

export default function CartComponent() {

  return (
    <Container>

      <div className='row'>
        <div className='col-md-10'>&nbsp;</div>
        <div className='col-md-2'>Total: {total}</div>
      </div>
      <div className='row'>
        <div className='col-md-10'>&nbsp;</div>
        <div className='col-md-2'>
          <Button onClick={() => checkout()}>Checkout</Button>
        </div>
      </div>
    </Container>
  )
}
