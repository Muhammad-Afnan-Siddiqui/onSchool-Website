import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import BackgroundImg from '../assets/Hero1.jpg';

const Home = () => {
  return (
    <section className='OnSchool-Home Home-bg '>
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <div className='Home-Content '>
              <h1 className='mb-2'>Learn From the Experts</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button className='Home-admission'>Addmision</button>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className='Home-SignUp-Form '>
              <Form className='text-start'>
                <h3>Sign Up</h3>
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
                  className='mb-3  w-100'
                  controlId='formBasicPassword'
                >
                  <Form.Control
                    type='password'
                    placeholder='Re-Enter Password'
                    className='input-Focus'
                  />
                </Form.Group>

                <Button variant='default' type='submit' className='btn'>
                  <b>Submit</b>
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
