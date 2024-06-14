import React, { useContext } from 'react'
import Product from '../model/Product'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';
type AppProps = {
  product: Product
}
export default function ProductCard({ product }: AppProps) {
  let {addToCart} = useContext(CartContext); //Consumer

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
            <FontAwesomeIcon icon={faShoppingCart} color='blue' onClick={
              () => addToCart({...product, "qty": 1, "amount": product.price})
              //  () => addToCart({id: product.id, title: product.title, price: product.price,.. "qty": 1, "amount": product.price})
            }/>
          </span>
        </Card.Footer>
      </Card>
    </div>
  )
}
