import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useAppDispatch } from '../redux/store'
import { increment } from '../redux/cartSlice'

export default function CartList({ product }) {
  let dispatch = useAppDispatch();
  return (
    <div className='container'>
      <div className='row my-2'>
        <div className='col-md-2'>
          <img src={product.image} style={{ "height": '50px' }} />
        </div>
        <div className='col-md-2'>
          {product.title}
        </div>
        <div className='col-md-4'>
          <FontAwesomeIcon icon={faMinus} color='blue' />
          &nbsp;
          {product.qty}
          &nbsp;
          <FontAwesomeIcon icon={faPlus} color='blue'  
          onClick={() => dispatch(increment(product.id))}
          />
        </div>

        <div className='col-md-2'>
            Price: {product.price}
        </div>
        <div className='col-md-2'>
          Amount: {product.amount}
        </div>
      </div>
    </div>
  )
}
