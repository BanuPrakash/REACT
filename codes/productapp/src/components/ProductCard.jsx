import React, { useContext } from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../context/CartContextProvider';

export default function ProductCard({ product }) {
  let { id, title, price, category, image } = product;
  let {addToCart} = useContext(CartContext)
  return (
    <div className='col-sm-6 col-md-4 my-2'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {category}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          Rs. {price} &nbsp;
          <FontAwesomeIcon icon={faShoppingCart} 
            color='blue' 
            onClick={() => addToCart(product)}/>
          &nbsp;&nbsp;
          <FontAwesomeIcon icon={faHeart} color='red' />
          {/* <Button variant="primary">Add to Cart</Button> */}
        </Card.Footer>
      </Card>
    </div>

  )
}
