import React from 'react'
import Product from '../model/Product'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from '../redux/features/CartSlice';
import { useAppDispatch } from '../redux/store';
type AppProps = {
  product: Product
}
export default function ProductCard({ product }: AppProps) {
  const dispatch = useAppDispatch();
  return (
    <div className='col-sm-6 col-md-4 mb-2'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          Rs.{product.price}
          <span className='right px-2'>
            <FontAwesomeIcon icon={faHeart} color='red' />
            <FontAwesomeIcon 
              onClick={() => dispatch(addToCart({...product, qty: 1, amount: product.price}))}
              icon={faShoppingCart} 
              color='blue' />
          </span>
        </Card.Footer>
      </Card>
    </div>
  )
}
