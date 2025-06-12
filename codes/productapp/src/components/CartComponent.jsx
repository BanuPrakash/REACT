import React, { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'
import { Button, Container } from 'react-bootstrap';
import CartRow from './CartRow'
export default function CartComponent() {
  let {cartItems, total, clearCart} = useContext(CartContext);
  return (
    <Container>
      {
        cartItems.map(item => <CartRow product={item} key={item.id}/>)
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
            <Button variant='warning' onClick={() => clearCart()}>Checkout</Button>
        </div>
      </div>
    </Container>
  )
}
