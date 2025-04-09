import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { CartContext } from './CartProvider';

export default function ProductCard({ product }) {
    let {addToCart} = useContext(CartContext);
    return (
        <div className='col-lg-4 col-sm-6 col-xs-12 my-2'>
            <Card style={{ width: '18rem' }}>
                <Link to={`/details/${product.id}`}>
                    <Card.Img variant="top" src={product.image}/>
                </Link>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                       {product.category}
                    </Card.Text>

                </Card.Body>
                <Card.Footer>
                    <span className='left'>{product.price}</span>
                    <span className='right px-2'>
                        <FontAwesomeIcon icon={faHeart} color='red'/>
                        <FontAwesomeIcon icon={faShoppingCart} 
                        color='blue'
                        onClick={() => addToCart(product)}
                        />
                    </span>
                </Card.Footer>
            </Card>
        </div>
    )
}
