import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
const Footer = () => {
  return (
    <section className='onSchool-Footer h-50'>
      <div className='Footer-Top'>
        <Container className='my-0 py-0  my-md-5 py-md-5 text-start'>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <div className='Footer-Left-Content'>
                <div className='Footer-Heading my-3'>
                  <h6>
                    <b>ABOUT ONSCHOOL</b>
                  </h6>
                </div>
                <div className='Footer-Para text-secondary'>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <div className='Footer-Center-Content  max-width'>
                <div className='Footer-Heading my-3'>
                  <h6>
                    <b>LINKS</b>
                  </h6>
                </div>
                <div className='Footer-list'>
                  <ul className='list-unstyled'>
                    <li href='#' className='color-Purple my-1'>
                      Home
                    </li>
                    <li href='#' className='color-Purple my-1'>
                      Courses
                    </li>
                    <li href='#' className='color-Purple my-1'>
                      Programs
                    </li>
                    <li href='#' className='color-Purple my-1'>
                      Teachers
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col sm={12} md={12} lg={4}>
              <div className='Footer-Rigt-Content'>
                <div className='Footer-Heading my-3'>
                  <h6>
                    <b>SUBSCRIBE</b>
                  </h6>
                </div>
                <div className='Footer-Para text-secondary'>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.s
                  </p>
                </div>
                <div className='Footer-Subscribe-Input '>
                  <input
                    name='email'
                    type='email'
                    placeholder='Email'
                    className=' input-Focus'
                  ></input>
                  <Button
                    variant='default'
                    type='submit'
                    className='subscribe-button color-BgPurple p-1 '
                  >
                    <span className='subscribe-button-text'>
                      <b>Subscribe</b>
                    </span>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className='Footer-Bottom my-3'>
          <Container>
            <div className='d-flex justify-content-center pt-3 pt-md-5 cr-border w-75 m-auto'>
              <p className='text-secondary'>
                Copyright
                <span>&copy;</span>2022 All Rights Reserved | This Templete is
                Made by{' '}
                <span>
                  <FaHeart />
                </span>{' '}
                by <span className='color-Purple '>Colorlib</span>
              </p>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Footer;
