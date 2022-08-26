import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Message = () => {
  return (
    <div className='onSchool-Message'>
      <section className='Main'>
        <Container className='w-50 d-flex justify-content-center py-5'>
          <div className='onSchool-Message-Form py-5 text-start'>
            <div className='Message-heading'>
              <h1>Message Us</h1>
            </div>
            <div className='Message-para text-secondary py-2 my-4'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className='Message-Form'>
              <form>
                <Row className='mb-4'>
                  <Col md={6} class='form-group '>
                    <input
                      type='text'
                      class='form-control p-2 input-Focus'
                      id='firstName'
                      placeholder='First Name'
                    />
                  </Col>
                  <Col md={6} class='form-group '>
                    <input
                      type='text'
                      class='form-control p-2 input-Focus'
                      id='lastName'
                      placeholder='Last Name'
                    />
                  </Col>
                </Row>
                <div class='form-group mb-4'>
                  <input
                    type='text'
                    class='form-control p-2 input-Focus'
                    id='subject'
                    placeholder='Subject'
                  />
                </div>
                <div class='form-group mb-4'>
                  <input
                    type='email'
                    class='form-control p-2 input-Focus'
                    id='email'
                    placeholder='Email'
                  />
                </div>

                <div class='form-group mb-4'>
                  <textarea
                    placeholder='
                    Wite Your Message Here.'
                    class='form-control p-2 input-Focus'
                    id='exampleFormControlTextarea1'
                    rows='10'
                  ></textarea>
                </div>
                <Button
                  variant='default'
                  type='submit'
                  className=' color-BgPurple'
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
export default Message;
