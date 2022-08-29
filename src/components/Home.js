import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import BackgroundImg from '../assets/Hero1.jpg';

const Home = () => {
  return (
    <div className='OnSchool-Home'>
      <div className='Home-bg'>
        <Container className='h-100'>
          <Row className='d-flex  align-items-center justify-content-center h-100 '>
            <Col sm={12} md={12} lg={6}>
              <div className='Home-Content text-white text-start'>
                <h1>Learn From the Experts</h1>
                <br />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <button className='Home-admission'>Addmision</button>
              </div>
            </Col>
            <Col
              sm={12}
              md={12}
              lg={6}
              className='d-flex justify-content-center'
            >
              <div className='Home-SignUp-Form'>
                <Form className='text-start'>
                  <Form.Label>Sign Up</Form.Label>
                  <Form.Group className='mb-3 w-100' controlId='formBasicEmail'>
                    <Form.Control
                      type='email'
                      placeholder='Enter email'
                      className='input-Focus'
                    />
                  </Form.Group>

                  <Form.Group
                    className='mb-3  w-100'
                    controlId='formBasicPassword'
                  >
                    <Form.Control
                      type='password'
                      placeholder='Password'
                      className='input-Focus'
                    />
                  </Form.Group>
                  <Form.Group
                    className='mb-3  w-1000'
                    controlId='formBasicPassword'
                  >
                    <Form.Control
                      type='password'
                      placeholder='Re-Enter Password'
                      className='input-Focus'
                    />
                  </Form.Group>

                  <Button variant='default' type='submit' className='btn'>
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
