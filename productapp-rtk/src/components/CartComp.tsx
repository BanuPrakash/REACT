import React, { useContext } from 'react'

import { Button, Container } from 'react-bootstrap';
import CartList from './CartList';

export default function CartComp() {

  return (
    <Container>
     
      <div className='row'>
        <div className='col-md-10'>&nbsp;</div>
        <div className='col-md-2'></div>
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
