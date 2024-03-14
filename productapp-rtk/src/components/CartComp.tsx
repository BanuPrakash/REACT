import React, { useContext } from 'react'

import { Button, Container } from 'react-bootstrap';
import CartList from './CartList';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { clearCart } from '../redux/features/CartSlice';
import { useNavigate } from 'react-router-dom';

export default function CartComp() {
  let { items, total } = useAppSelector(state => state.cart);
  let dispatch = useAppDispatch();
  let navigate = useNavigate();
 
  function checkout() {
    dispatch(clearCart());
    // axios.post....
    navigate("/");
  }
  return (
    <Container>
      {
        items.map(item => <CartList key={item.id} product={item}/>)
      }
      <div className='row'>
        <div className='col-md-10'>&nbsp;</div>
        <div className='col-md-2'>Total : {total}</div>
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
