import React, { useEffect, useState } from 'react'
// import products from '../products'
import { Link, useParams } from 'react-router-dom'
import { Button, Card, Col, Container, Image, ListGroup, Row } from 'react-bootstrap'
import Rating from './Rating'
import axios from 'axios'

const ProductScreen = () => {
  const { id } = useParams();
const [product,setProduct]=useState({})
useEffect(()=>{
 const fetchOneProduct =async()=>{
  const {data}= await axios.get(`/api/product/${id}`)
setProduct(data)
}
fetchOneProduct();
},[])
  return (
    <Container>
      <Link className='btn btn-light my-3' to='/'>
      Go Back
      </Link> 
      <Row>
        <Col md={6}>
          <Image src={product.image } alt={product.name} fluid/>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item> 
              price: {product.price} 
            </ListGroup.Item>
            <ListGroup.Item>
                    discription: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                        <ListGroup.Item>
                          <Row>
                            <Col>price:</Col>  
                              <Col>
                                  {product.price}
                              </Col>
                            </Row>
                        </ListGroup.Item>
                      <ListGroup.Item>
                      <Row>
                        <Col>status:</Col>  
                          <Col>
                            {product.countInStock>0?'in Stock':"Out Stock"}
                          </Col>
                        </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Button className='btn-block' type='button' disabled={product.countInStock==0}>Add To Cart</Button>
                        </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
        
      </Row>
    </Container>
  )
}

export default ProductScreen