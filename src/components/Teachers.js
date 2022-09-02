import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import Img1 from '../assets/xperson_1.jpg.pagespeed.ic.KDJy3h62S9.jpeg';
import Img2 from '../assets/xperson_2.jpg.pagespeed.ic.CwOS-UUpRi.jpeg';
import Img3 from '../assets/xperson_3.jpg.pagespeed.ic._DYBFPhH-a.jpeg';
import Img4 from '../assets/xperson_4.jpg.pagespeed.ic.khM9f77Fmk.jpeg';
const Teachers = () => {
  return (
    <section className='onSchool-Teachers'>
      <div classNam='Top-Section my-5'>
        <Container>
          <div className='Teachers-Top-Content py-5'>
            <h1 className='py-5'>
              <b>Our Teachers</b>
            </h1>
            <p className='text-secondary max-width'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </Container>
      </div>
      <div className='Middle-Section my-5'>
        <Container>
          <Row>
            <Col sm={12} md={12} lg={4}>
              <Card className='d-flex justify-content-center rounded-0 position-relative my-5'>
                <Card.Img
                  variant='top'
                  src={Img1}
                  className='position-absolute img-hack '
                />
                <Card.Body className='m-5 card-padding'>
                  <Card.Title>Benjamin Stone</Card.Title>
                  <Card.Subtitle className='my-3 text-muted'>
                    Physical Teacher
                  </Card.Subtitle>
                  <Card.Text className='text-secondary'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={12} lg={4}>
              <Card className='d-flex justify-content-center rounded-0 position-relative my-5'>
                <Card.Img
                  variant='top'
                  src={Img2}
                  className='position-absolute img-hack'
                />
                <Card.Body className='m-5 card-padding'>
                  <Card.Title>Katleen Stone</Card.Title>
                  <Card.Subtitle className='my-3 text-muted'>
                    Physical Teacher
                  </Card.Subtitle>
                  <Card.Text className='text-secondary'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={12} lg={4}>
              <Card className='d-flex justify-content-center rounded-0 position-relative my-5 '>
                <Card.Img
                  variant='top'
                  src={Img3}
                  className='position-absolute img-hack'
                />
                <Card.Body className='m-5 card-padding'>
                  <Card.Title>Sadie White</Card.Title>
                  <Card.Subtitle className='my-3 text-muted'>
                    Physical Teacher
                  </Card.Subtitle>
                  <Card.Text className='text-secondary'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='Bottom-Section Teachers-bg-img py-5'>
        <Container>
          <div className='Techer-bottom-section-description py-5 text-white '>
            <img src={Img4} height={'150px'} className='rounded-circle ' />
            <h4 className='my-4'>Jrome Jensen</h4>
            <p className='w-75 m-auto'>
              "There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable."{' '}
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Teachers;
