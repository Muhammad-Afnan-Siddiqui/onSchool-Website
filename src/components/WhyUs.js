import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import Blog1 from '../assets/blob_1 (1).svg';
import Blog2 from '../assets/blob_2 (1).svg';
import Benjamin from '../assets/xperson_transparent.png.pagespeed.ic.QLbGZHruxs.png';

const WhyUs = () => {
  return (
    <section className='onSchool-WhyUs position-relative'>
      <Container>
        <Row>
          <div className='Top-Section '>
            <h1 className='heading'>
              <b>Why Choose US</b>
            </h1>
          </div>
        </Row>
        <Row className='gx-0'>
          <Col>
            <div className='Middle-Section '>
              <Card className='Card shadow-lg'>
                <Card.Body className='alignment '>
                  <Card.Text className='mb-0'>
                    <span className='mx-3 icon-roundend  color-BgPurple'>
                      <FaGraduationCap color='white' size={20} />
                    </span>
                  </Card.Text>
                  <Card.Text className='text-align '>
                    Lorem Ipsum has been the industry's
                  </Card.Text>
                </Card.Body>
                <Card.Body className='alignment '>
                  <Card.Text className='mb-0'>
                    <span className='mx-3 icon-roundend  color-BgPurple  '>
                      <FaUniversity color='white' size={20} />
                    </span>
                  </Card.Text>
                  <Card.Text className='text-align mb-0'>
                    Lorem Ipsum has been the industry's
                  </Card.Text>
                </Card.Body>
                <Card.Body className='alignment'>
                  <Card.Text className='mb-0'>
                    <span className='mx-3 icon-roundend  color-BgPurple  '>
                      <FaGraduationCap color='white' size={20} />
                    </span>
                  </Card.Text>
                  <Card.Text className='text-align'>
                    Lorem Ipsum has been the industry's
                  </Card.Text>
                </Card.Body>
                <Card.Body className='alignment'>
                  <Card.Text className='mb-0'>
                    <span className='mx-3 icon-roundend  color-BgPurple  '>
                      <FaUniversity color='white' size={20} />
                    </span>
                  </Card.Text>
                  <Card.Text className='text-align'>
                    Lorem Ipsum has been the industry's
                  </Card.Text>
                </Card.Body>
                <Card.Body className='alignment'>
                  <Card.Text className='mb-0'>
                    <span className='mx-3 icon-roundend  color-BgPurple  '>
                      <FaGraduationCap color='white' size={20} />
                    </span>
                  </Card.Text>
                  <Card.Text className='text-align'>
                    Lorem Ipsum has been the industry's
                  </Card.Text>
                </Card.Body>
                <Card.Body className='alignment'>
                  <Card.Text className='mb-0'>
                    <span className='mx-3 icon-roundend  color-BgPurple  '>
                      <FaUniversity color='white' size={20} />
                    </span>
                  </Card.Text>
                  <Card.Text className='text-align'>
                    Lorem Ipsum has been the industry'ss
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col className='d-none d-xs-none d-sm-none d-md-none d-lg-none  d-xl-block'>
            <img
              src={Benjamin}
              alt=' Benjamin'
              className='img-fluid Benjamin-img '
            />
          </Col>
        </Row>
      </Container>

      <img src={Blog1} alt=' Blog2' className='img-fluid blog1-side-img' />
      <img src={Blog2} alt=' Blog2' className='img-fluid blog2-side-img' />
    </section>
  );
};

export default WhyUs;
