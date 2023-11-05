import React from 'react'
import products from '../products'
import { Col, Row } from 'react-bootstrap'
import Product from './Product'
const HomeScreen = () => {
  return (
    <main>
    <h1 className='my-2'> 
      Latest Products 
    </h1>
    <Row>
      
      {products.map(product=>(
        <Col sm={12} md={6} lg={4}>
          <Product product={product}/>
        </Col>
      ))}
      
    </Row>
    </main>
  )
}

export default HomeScreen