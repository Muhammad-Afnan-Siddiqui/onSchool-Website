import React from 'react';
import { Navbar, Nav, Container, Button, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <div className='onSchool-Header'>
        <Navbar
          bg='transparent'
          variant='light'
          expand='sm'
          fixed='top'
          sticky='top'
        >
          <Container fluid className='my-3 mx-5'>
            <Navbar.Brand href='#home' className=' text-white'>
              <b>On School</b>
            </Navbar.Brand>
            <Nav className='justify-content-between ' activeKey='/home'>
              <Nav.Item className='mx-4 text-white'>
                <Nav.Link href='/home'>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item className='mx-4'>
                <Nav.Link eventKey='link-1'>Courses</Nav.Link>
              </Nav.Item>
              <Nav.Item className='mx-4'>
                <Nav.Link eventKey='link-2'>Programs</Nav.Link>
              </Nav.Item>
              <Nav.Item className='mx-4'>
                <Nav.Link eventKey='link-3'>Teachers</Nav.Link>
              </Nav.Item>
              <Nav.Item className='mx-4'>
                <Nav.Link eventKey='link-4'>Contact</Nav.Link>
              </Nav.Item>
            </Nav>
            <button className='Contact-btn'>Contact Us</button>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
export default Header;
