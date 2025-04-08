import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
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
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
