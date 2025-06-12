import React, { useContext } from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../context/CartContextProvider';
import { Link } from 'react-router-dom';
import Product from '../model/Product';
type AppProps = {
  product: Product
}

// interface AppProps {
//    product: Product
// }

export default function ProductCard({ product }: AppProps) {
  let { id, title, price, category, image } = product;
  let { addToCart } = useContext(CartContext)
  return (
    <div className='col-sm-6 col-md-4 my-2'>
      <Card style={{ width: '18rem' }}>
        <Link to={`/details/${id}`}>
          <Card.Img variant="top" src={image} />
        </Link>
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
            onClick={() => addToCart(product)} />
          &nbsp;&nbsp;
          <FontAwesomeIcon icon={faHeart} color='red' />
          {/* <Button variant="primary">Add to Cart</Button> */}
        </Card.Footer>
      </Card>
    </div>

  )
}
