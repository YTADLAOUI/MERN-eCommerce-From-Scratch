import React from 'react'
import { Card, CardTitle } from 'react-bootstrap'

const Product = ({product}) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <Card.Body>
            <a href={`/product/${product._id}`}>
              <Card.Img src={product.image} variant='top'/>
                    <CardTitle>
                      <strong>{product.name}</strong>
                    </CardTitle>
            </a>
            <Card.Text as='div'>
              <div className='my-3'>
                {product.rating} form {product.numReviews}
              </div>
            </Card.Text>
            <Card.Text as='h3'>${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Product