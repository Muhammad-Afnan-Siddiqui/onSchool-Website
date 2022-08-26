import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <div className='onSchool-Header'>
        <Navbar bg='transparent Nav-height'>
          <Container fluid className='mx-5'>
            <Navbar.Brand href='#home' className=' text-white'>
              <b>On School</b>
            </Navbar.Brand>
            <Nav className='justify-content-between ' activeKey='/home'>
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
          </Container>
        </Navbar>
      </div>
    </>
  );
};
export default Header;
