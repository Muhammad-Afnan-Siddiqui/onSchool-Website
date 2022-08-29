import React from 'react';
import { useState } from 'react';
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';
import { CgMenu } from 'react-icons/cg';

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='onSchool-Header'>
        <Navbar bg='transparent Nav-height'>
          <Container fluid className='mx-5'>
            <Navbar.Brand href='#home' className=' text-white'>
              <b>On School</b>
            </Navbar.Brand>
            <Nav
              className='justify-content-between  Nav-toggle-hidden'
              activeKey='/home'
            >
              <Nav.Item className='mx-4 '>
                <Nav.Link href='/home' className=' text-white'>
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className='mx-4'>
                <Nav.Link eventKey='link-1' className=' text-white'>
                  Courses
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className='mx-4'>
                <Nav.Link eventKey='link-2' className=' text-white'>
                  Programs
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className='mx-4'>
                <Nav.Link eventKey='link-3' className=' text-white'>
                  Teachers
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className='mx-4'>
                <Nav.Link eventKey='link-4' className=' text-white'>
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <button className='Contact-btn'>Contact Us</button>
            <button onClick={handleShow} className='me-2 Navbar-offCanvas-btn '>
              <CgMenu size={25} />
            </button>
            <Offcanvas show={show} onHide={handleClose} className='w-25'>
              <Offcanvas.Header
                closeButton
                className='color-BgPurple'
              ></Offcanvas.Header>
              <Offcanvas.Body className='color-BgPurple '>
                <Nav className='justify-content-start flex-grow-1 pe-3'>
                  <Nav.Link href='#action1'>Home</Nav.Link>
                  <Nav.Link href='#action2'>Courses</Nav.Link>
                  <Nav.Link href='#action3'>Programs</Nav.Link>
                  <Nav.Link href='#action4'>Teachers</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
export default Header;
