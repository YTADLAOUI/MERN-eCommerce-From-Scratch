import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
    <footer>
    <Container>
      <Row>
        <Col className='text-center'>
          Copyright &copy; ProShop2023
        </Col>
      </Row>
    </Container>
    </footer>
    </>
  )
}

export default Footer