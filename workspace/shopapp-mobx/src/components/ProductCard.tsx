import React, { useContext } from 'react'
import Product from '../model/Product'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '..';
import { CartItem } from '../mobx/CartStore';

type AppProps = {
  product: Product
}
export default function ProductCard({ product }: AppProps) {
  let cartStore = useContext(CartContext);
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
              onClick={() => cartStore.addToCart(new CartItem(
                product.id, product.title, product.price,
                product.description,
                product.category,
                product.image,
                1,
                product.price))}
              icon={faShoppingCart}
              color='blue' />
          </span>
        </Card.Footer>
      </Card>
    </div>
  )
}
