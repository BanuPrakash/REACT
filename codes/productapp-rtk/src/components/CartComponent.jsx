import React, { useContext } from 'react'

import { Button, Container } from 'react-bootstrap';
import CartRow from './CartRow'
export default function CartComponent() {
   return (
    <Container>
     
      <div className='row'>
        <div className='col-md-8'>
            &nbsp;
        </div>
         <div className='col-md-4'>
            Total {0}
        </div>
      </div>
      <div className='row'>
        <div className='col-md-8'>
            &nbsp;
        </div>
         <div className='col-md-4'>
            <Button variant='warning' >Checkout</Button>
        </div>
      </div>
    </Container>
  )
}
