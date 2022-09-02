import React from 'react';
import { FaRegClock, FaUsers, FaRegCommentDots } from 'react-icons/fa';
import { Container, Card, Row, Col, Button, Carousel } from 'react-bootstrap';
import Card1 from '../assets/ezgif.com-gif-maker.jpg';
import Card2 from '../assets/hero-1.jpg';
import Card3 from '../assets/ximg_4.jpg.pagespeed.ic.MzhOoMOq8Q.jpeg';
const Courses = () => {
  return (
    <section className='onSchool-Courses'>
      <div className='Heading'>
        <h1>Our Courses</h1>
      </div>
      <Container>
        <div className='Cards-Carousel'>
          <Carousel
            indicators={false}
            nextIcon={
              <span>
                <b>NEXT </b>
              </span>
            }
            prevIcon={
              <span>
                <b>PREV </b>
              </span>
            }
          >
            <Carousel.Item>
              <Card className='rounded-0  '>
                <Card.Img
                  variant='top'
                  src={Card1}
                  height={200}
                  className='rounded-0 image-size'
                />

                <Card.Body className='p-4 my-3 text-start '>
                  <Card.Subtitle className='my-3 text-muted d-flex align-items-center '>
                    <FaRegClock className='mx-1' /> 4 Lesson/ 2 Weeks
                  </Card.Subtitle>
                  <Card.Title className='color-Purple mb-2'>
                    Card Title
                  </Card.Title>
                  <Card.Text className='text-secondary mb-2'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Footer class=' Card-Footer border border-light  text-secondary p-3'>
                  <Card.Text className='mb-0 d-flex align-items-center'>
                    <FaUsers size={20} className='mx-1' />
                    2,193 Students
                  </Card.Text>
                  <Card.Text className='mb-0 d-flex align-items-center'>
                    <FaRegCommentDots size={20} className='mx-1' /> 2
                  </Card.Text>
                </Card.Footer>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card className='rounded-0  '>
                <Card.Img
                  variant='top'
                  src={Card2}
                  height={200}
                  className='rounded-0 image-size'
                />

                <Card.Body className='p-4 my-3 text-start '>
                  <Card.Subtitle className='my-3 text-muted d-flex align-items-center '>
                    <FaRegClock className='mx-1' /> 4 Lesson/ 2 Weeks
                  </Card.Subtitle>
                  <Card.Title className='color-Purple mb-2'>
                    Card Title
                  </Card.Title>
                  <Card.Text className='text-secondary mb-2'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Footer class='Card-Footer  border border-light  text-secondary p-3'>
                  <Card.Text className='mb-0 d-flex align-items-center'>
                    <FaUsers size={20} className='mx-1' />
                    2,193 Students
                  </Card.Text>
                  <Card.Text className='mb-0 d-flex align-items-center'>
                    <FaRegCommentDots size={20} className='mx-1' /> 2
                  </Card.Text>
                </Card.Footer>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card className='rounded-0  '>
                <Card.Img
                  variant='top'
                  src={Card3}
                  height={200}
                  className='rounded-0 image-size'
                />

                <Card.Body className='p-4 my-3 text-start '>
                  <Card.Subtitle className='my-3 text-muted d-flex align-items-center '>
                    <FaRegClock className='mx-1' /> 4 Lesson/ 2 Weeks
                  </Card.Subtitle>
                  <Card.Title className='color-Purple mb-2'>
                    Card Title
                  </Card.Title>
                  <Card.Text className='text-secondary mb-2'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Footer class='Card-Footer  border border-light  text-secondary p-3'>
                  <Card.Text className='mb-0 d-flex align-items-center'>
                    <FaUsers size={20} className='mx-1' />
                    2,193 Students
                  </Card.Text>
                  <Card.Text className='mb-0 d-flex align-items-center'>
                    <FaRegCommentDots size={20} className='mx-1' /> 2
                  </Card.Text>
                </Card.Footer>
              </Card>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default Courses;
