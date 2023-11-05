import React from 'react'
import { Container, Nav, Navbar, Row } from 'react-bootstrap'

const Header = () => {
  return (
    <>
     <Navbar bg="dark" variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="ml-auto">
              <Nav.Link href="/Cart"><i className='fas fa-shopping-cart'/>Cart</Nav.Link>
              <Nav.Link href="/login"><i className='fas fa-user'/>Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header