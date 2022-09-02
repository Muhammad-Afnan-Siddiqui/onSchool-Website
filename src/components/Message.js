import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Message = () => {
  return (
    <section className='onSchool-Message d-flex align-items-center '>
      <Container>
        <div className='max-width '>
          <div className='Message-Content my-5'>
            <h1 className='mb-3'>Message Us</h1>
            <p className='Message-para text-secondary '>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className='Message-Form'>
            <form>
              <Row className='mb-4'>
                <Col md={6} class='form-group  '>
                  <input
                    type='text'
                    class='form-control first-Name p-2 input-Focus'
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
              <Row className=' mb-4'>
                <div class='form-group '>
                  <input
                    type='text'
                    class='form-control p-2 input-Focus'
                    id='subject'
                    placeholder='Subject'
                  />
                </div>
              </Row>
              <Row className=' mb-4'>
                <div class='form-group'>
                  <input
                    type='email'
                    class='form-control p-2 input-Focus'
                    id='email'
                    placeholder='Email'
                  />
                </div>
              </Row>
              <Row className=' mb-4'>
                <div class='form-group '>
                  <textarea
                    placeholder='
                    Wite Your Message Here.'
                    class='form-control p-2 input-Focus'
                    id='exampleFormControlTextarea1'
                    rows='10'
                  ></textarea>
                </div>
              </Row>

              <Button
                variant='default'
                type='submit'
                className=' color-BgPurple mb-5'
              >
                <b> Send Message </b>
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Message;
