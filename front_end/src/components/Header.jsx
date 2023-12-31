import React from 'react'
import { Container, Nav, Navbar, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <>
     <Navbar bg="dark" variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand>Navbar</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="ml-auto">
              <LinkContainer to='/cart'>
              <Nav.Link ><i className='fas fa-shopping-cart'/>Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
              <Nav.Link ><i className='fas fa-user'/>Sign In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header