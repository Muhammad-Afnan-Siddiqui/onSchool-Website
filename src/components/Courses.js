import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
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
      <div className='Courses-slider'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className='mySwiper'
          breakpoints={{
            768: {
              // when window width is >= 768px
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            992: {
              // when window width is >= 992px
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1350: {
              // when window width is >= 1350px
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
        >
          <SwiperSlide>
            <Card className='rounded-0  my-2'>
              <Card.Img
                variant='top'
                src={Card1}
                className='rounded-0 image-size'
              />

              <Card.Body className='courses-card-body'>
                <Card.Subtitle className='cousrses-card-discount'>
                  $99
                </Card.Subtitle>
                <Card.Subtitle className='my-3 text-muted d-flex align-items-center '>
                  <FaRegClock className='mx-1' /> 4 Lesson/ 2 Weeks
                </Card.Subtitle>
                <Card.Title className='color-Purple mb-2'>
                  Card Title
                </Card.Title>
                <Card.Text className='text-secondary mb-2'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Footer class=' Card-Footer text-secondary '>
                <Row className='gx-0'>
                  <Col xs={9}>
                    <p className='Card-Footer-content content-l'>
                      <FaUsers size={20} className='mx-3' />
                      2,193 Students
                    </p>
                  </Col>
                  <Col xs={3}>
                    <p className='Card-Footer-content content-r'>
                      <FaRegCommentDots size={20} className='mx-2' /> 2
                    </p>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <Card className='rounded-0  my-2'>
              <Card.Img
                variant='top'
                src={Card2}
                height={200}
                className='rounded-0 image-size'
              />

              <Card.Body className='courses-card-body '>
                <Card.Subtitle className='cousrses-card-discount'>
                  $99
                </Card.Subtitle>
                <Card.Subtitle className='my-3 text-muted d-flex align-items-center '>
                  <FaRegClock className='mx-1' /> 4 Lesson/ 2 Weeks
                </Card.Subtitle>
                <Card.Title className='color-Purple mb-2'>
                  Card Title
                </Card.Title>
                <Card.Text className='text-secondary mb-2'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Footer class=' Card-Footer text-secondary '>
                <Row className='gx-0'>
                  <Col xs={9}>
                    <p className='Card-Footer-content content-l'>
                      <FaUsers size={20} className='mx-3' />
                      2,193 Students
                    </p>
                  </Col>
                  <Col xs={3}>
                    <p className='Card-Footer-content content-r'>
                      <FaRegCommentDots size={20} className='mx-2' /> 2
                    </p>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className='rounded-0 my-2 '>
              <Card.Img
                variant='top'
                src={Card3}
                height={200}
                className='rounded-0 image-size'
              />

              <Card.Body className='courses-card-body'>
                <Card.Subtitle className='cousrses-card-discount'>
                  $99
                </Card.Subtitle>
                <Card.Subtitle className='my-3 text-muted d-flex align-items-center '>
                  <FaRegClock className='mx-1' /> 4 Lesson/ 2 Weeks
                </Card.Subtitle>
                <Card.Title className='color-Purple mb-2'>
                  Card Title
                </Card.Title>
                <Card.Text className='text-secondary mb-2'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Footer class=' Card-Footer text-secondary '>
                <Row className='gx-0'>
                  <Col xs={9}>
                    <p className='Card-Footer-content content-l'>
                      <FaUsers size={20} className='mx-3' />
                      2,193 Students
                    </p>
                  </Col>
                  <Col xs={3}>
                    <p className='Card-Footer-content content-r'>
                      <FaRegCommentDots size={20} className='mx-2' /> 2
                    </p>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className='rounded-0  my-2'>
              <Card.Img
                variant='top'
                src={Card1}
                className='rounded-0 image-size'
              />

              <Card.Body className='courses-card-body'>
                <Card.Subtitle className='cousrses-card-discount'>
                  $99
                </Card.Subtitle>
                <Card.Subtitle className='my-3 text-muted d-flex align-items-center '>
                  <FaRegClock className='mx-1' /> 4 Lesson/ 2 Weeks
                </Card.Subtitle>
                <Card.Title className='color-Purple mb-2'>
                  Card Title
                </Card.Title>
                <Card.Text className='text-secondary mb-2'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Footer class=' Card-Footer text-secondary '>
                <Row className='gx-0'>
                  <Col xs={9}>
                    <p className='Card-Footer-content content-l'>
                      <FaUsers size={20} className='mx-3' />
                      2,193 Students
                    </p>
                  </Col>
                  <Col xs={3}>
                    <p className='Card-Footer-content content-r'>
                      <FaRegCommentDots size={20} className='mx-2' /> 2
                    </p>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <Card className='rounded-0  my-2'>
              <Card.Img
                variant='top'
                src={Card2}
                height={200}
                className='rounded-0 image-size'
              />

              <Card.Body className='courses-card-body '>
                <Card.Subtitle className='cousrses-card-discount'>
                  $99
                </Card.Subtitle>
                <Card.Subtitle className='my-3 text-muted d-flex align-items-center '>
                  <FaRegClock className='mx-1' /> 4 Lesson/ 2 Weeks
                </Card.Subtitle>
                <Card.Title className='color-Purple mb-2'>
                  Card Title
                </Card.Title>
                <Card.Text className='text-secondary mb-2'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Footer class=' Card-Footer text-secondary '>
                <Row className='gx-0'>
                  <Col xs={9}>
                    <p className='Card-Footer-content content-l'>
                      <FaUsers size={20} className='mx-3' />
                      2,193 Students
                    </p>
                  </Col>
                  <Col xs={3}>
                    <p className='Card-Footer-content content-r'>
                      <FaRegCommentDots size={20} className='mx-2' /> 2
                    </p>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className='rounded-0 my-2 '>
              <Card.Img
                variant='top'
                src={Card3}
                height={200}
                className='rounded-0 image-size'
              />

              <Card.Body className='courses-card-body'>
                <Card.Subtitle className='cousrses-card-discount'>
                  $99
                </Card.Subtitle>
                <Card.Subtitle className='my-3 text-muted d-flex align-items-center '>
                  <FaRegClock className='mx-1' /> 4 Lesson/ 2 Weeks
                </Card.Subtitle>
                <Card.Title className='color-Purple mb-2'>
                  Card Title
                </Card.Title>
                <Card.Text className='text-secondary mb-2'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Footer class=' Card-Footer text-secondary '>
                <Row className='gx-0'>
                  <Col xs={9}>
                    <p className='Card-Footer-content content-l'>
                      <FaUsers size={20} className='mx-3' />
                      2,193 Students
                    </p>
                  </Col>
                  <Col xs={3}>
                    <p className='Card-Footer-content content-r'>
                      <FaRegCommentDots size={20} className='mx-2' /> 2
                    </p>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className='rounded-0  my-2'>
              <Card.Img
                variant='top'
                src={Card1}
                className='rounded-0 image-size'
              />

              <Card.Body className='courses-card-body'>
                <Card.Subtitle className='cousrses-card-discount'>
                  $99
                </Card.Subtitle>
                <Card.Subtitle className='my-3 text-muted d-flex align-items-center '>
                  <FaRegClock className='mx-1' /> 4 Lesson/ 2 Weeks
                </Card.Subtitle>
                <Card.Title className='color-Purple mb-2'>
                  Card Title
                </Card.Title>
                <Card.Text className='text-secondary mb-2'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Footer class=' Card-Footer text-secondary '>
                <Row className='gx-0'>
                  <Col xs={9}>
                    <p className='Card-Footer-content content-l'>
                      <FaUsers size={20} className='mx-3' />
                      2,193 Students
                    </p>
                  </Col>
                  <Col xs={3}>
                    <p className='Card-Footer-content content-r'>
                      <FaRegCommentDots size={20} className='mx-2' /> 2
                    </p>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <Card className='rounded-0  my-2'>
              <Card.Img
                variant='top'
                src={Card2}
                height={200}
                className='rounded-0 image-size'
              />

              <Card.Body className='courses-card-body '>
                <Card.Subtitle className='cousrses-card-discount'>
                  $99
                </Card.Subtitle>
                <Card.Subtitle className='my-3 text-muted d-flex align-items-center '>
                  <FaRegClock className='mx-1' /> 4 Lesson/ 2 Weeks
                </Card.Subtitle>
                <Card.Title className='color-Purple mb-2'>
                  Card Title
                </Card.Title>
                <Card.Text className='text-secondary mb-2'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Footer class=' Card-Footer text-secondary '>
                <Row className='gx-0'>
                  <Col xs={9}>
                    <p className='Card-Footer-content content-l'>
                      <FaUsers size={20} className='mx-3' />
                      2,193 Students
                    </p>
                  </Col>
                  <Col xs={3}>
                    <p className='Card-Footer-content content-r'>
                      <FaRegCommentDots size={20} className='mx-2' /> 2
                    </p>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className='rounded-0 my-2 '>
              <Card.Img
                variant='top'
                src={Card3}
                height={200}
                className='rounded-0 image-size'
              />

              <Card.Body className='courses-card-body'>
                <Card.Subtitle className='cousrses-card-discount'>
                  $99
                </Card.Subtitle>
                <Card.Subtitle className='my-3 text-muted d-flex align-items-center '>
                  <FaRegClock className='mx-1' /> 4 Lesson/ 2 Weeks
                </Card.Subtitle>
                <Card.Title className='color-Purple mb-2'>
                  Card Title
                </Card.Title>
                <Card.Text className='text-secondary mb-2'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Footer class=' Card-Footer text-secondary '>
                <Row className='gx-0'>
                  <Col xs={9}>
                    <p className='Card-Footer-content content-l'>
                      <FaUsers size={20} className='mx-3' />
                      2,193 Students
                    </p>
                  </Col>
                  <Col xs={3}>
                    <p className='Card-Footer-content content-r'>
                      <FaRegCommentDots size={20} className='mx-2' /> 2
                    </p>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Courses;
