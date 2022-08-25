import React from 'react';
import { FaRegClock, FaUsers, FaRegCommentDots } from 'react-icons/fa';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import Card1 from '../assets/ezgif.com-gif-maker.jpg';
import Card2 from '../assets/hero-1.jpg';
import Card3 from '../assets/ximg_4.jpg.pagespeed.ic.MzhOoMOq8Q.jpeg';
const Courses = () => {
  return (
    <div className='onSchool-Courses text-dark'>
      <div className='Courses-bg'>
        <Container>
          <Row>
            <Col md={12}>
              <div className=' fw-bolder my-2 py-5 text-white'>
                <h1>Courses </h1>
              </div>
            </Col>
          </Row>
          <Row className='my-5 g-5'>
            <Col md={4}>
              <div className='Courses-Cards my-3 text-start'>
                <Card style={{ width: '350px' }} className='rounded-0 border-0'>
                  <Card.Img
                    variant='top'
                    src={Card1}
                    height={200}
                    className='rounded-0'
                  />
                  <Card.Body className='p-4 my-3'>
                    <Card.Subtitle className='mb-2 text-muted'>
                      <FaRegClock /> 4 Lesson/ 2 Weeks
                    </Card.Subtitle>
                    <Card.Title className='color-Purple'>Card Title</Card.Title>
                    <Card.Text className='text-secondary'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer class='d-flex justify-content-between align-items-center  border border-light  text-secondary py-3 px-3'>
                    <Card.Text className='mb-0'>
                      <FaUsers size={20} />
                      2,193 Students
                    </Card.Text>
                    <Card.Text>
                      <FaRegCommentDots size={20} /> 2
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </Col>
            <Col md={4}>
              <div className='Courses-Cards my-3 text-start'>
                <Card style={{ width: '350px' }} className='rounded-0 border-0'>
                  <Card.Img
                    variant='top'
                    src={Card2}
                    height={200}
                    className='rounded-0'
                  />
                  <Card.Body className='p-4 my-3'>
                    <Card.Subtitle className='mb-2 text-muted'>
                      <FaRegClock /> 4 Lesson/ 2 Weeks
                    </Card.Subtitle>
                    <Card.Title className='color-Purple'>Card Title</Card.Title>
                    <Card.Text className='text-secondary'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer class='d-flex justify-content-between align-items-center border border-light  text-secondary  py-3 px-3'>
                    <Card.Text className='mb-0'>
                      {' '}
                      <FaUsers size={20} />
                      2,193 Students
                    </Card.Text>
                    <Card.Text>
                      <FaRegCommentDots size={20} /> 2
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </Col>
            <Col md={4}>
              <div className='Courses-Cards my-3 text-start'>
                <Card
                  style={{ width: '350px' }}
                  className='rounded-0 border-0  '
                >
                  <Card.Img
                    variant='top'
                    src={Card3}
                    height={200}
                    className='rounded-0'
                  />
                  <Card.Body className='p-4 my-3 '>
                    <Card.Subtitle className='mb-2 text-muted'>
                      <FaRegClock /> 4 Lesson/ 2 Weeks
                    </Card.Subtitle>
                    <Card.Title className='color-Purple'>Card Title</Card.Title>
                    <Card.Text className='text-secondary'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer class='d-flex justify-content-between align-items-center border border-light  text-secondary py-3 px-3'>
                    <Card.Text className='mb-0'>
                      <FaUsers size={20} />
                      2,193 Students
                    </Card.Text>
                    <Card.Text>
                      <FaRegCommentDots size={20} /> 2
                    </Card.Text>
                  </Card.Footer>
                </Card>
              </div>
            </Col>
          </Row>
          <Row className='d-flex justify-content-center  my-5'>
            <Button variant='default' className='btn rounded-1  my-5 mx-2'>
              PREV
            </Button>
            <Button variant='default' className='btn rounded-1  my-5 mx-2'>
              NEXT
            </Button>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Courses;