import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Button, Container } from 'react-bootstrap';
import CartList from './CartList';

export default function CartComp() {
  let { items, total, checkout } = useContext(CartContext);
  return (
    <Container>
      {
        items.map(item => <CartList key={item.id} product={item} />)
      }
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
