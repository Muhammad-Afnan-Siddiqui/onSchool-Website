import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Img1 from '../assets/undraw_teacher.svg';
import Img2 from '../assets/undraw_teaching (1).svg';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';

const Programs = () => {
  return (
    <div className='onSchool-Programs '>
      <div className='Programs'>
        <section className='Top-Section'>
          <Container className='h-100 w-50'>
            <Row className='d-flex justify-content-center'>
              <Col md={12}>
                <div className='Programs-Top-Content max-width'>
                  <h1 className='my-5'>
                    <b>Our Programs</b>
                  </h1>
                  <p className='text-secondary '>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='Middle-Section'>
          <Container>
            <Row className='my-5 media-remove-margin'>
              <Col sm={12} md={12} lg={6}>
                <div className='d-flex align-items-center'>
                  <img src={Img1} width={'100%'} />
                </div>
              </Col>
              <Col
                sm={12}
                md={12}
                lg={6}
                className='my-4 p-0 my-md-5 p-md-5 text-start text-secondary d-flex justify-content-center'
              >
                <div className='w-75'>
                  <h3 className='color-Purple mb-3'>
                    We Are Excellent in Education
                  </h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <p>
                    <span className='icon-roundend  color-BgPurple mx-4 '>
                      <FaGraduationCap size={20} color='white' />
                    </span>
                    22,913 Yearly Gradute
                  </p>
                  <p>
                    <span className='mx-4 icon-roundend  color-BgPurple'>
                      <FaUniversity size={20} color='white' />
                    </span>
                    150 Universities World Wide
                  </p>
                </div>
              </Col>
            </Row>
            <Row className='my-5 media-remove-margin'>
              <Col
                sm={12}
                md={12}
                lg={6}
                className='my-4 p-0 my-md-5 p-md-5 text-start text-secondary d-flex justify-content-center'
              >
                <div className='w-75'>
                  <h3 className='color-Purple mb-3'>
                    We Are Excellent in Education
                  </h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <p>
                    <span className='mx-4 icon-roundend  color-BgPurple'>
                      <FaGraduationCap size={20} color='white' />
                    </span>
                    22,913 Yearly Gradute
                  </p>
                  <p>
                    <span className='mx-4 icon-roundend  color-BgPurple'>
                      <FaUniversity size={20} color='white' />
                    </span>
                    150 Universities World Wide
                  </p>
                </div>
              </Col>
              <Col sm={12} md={12} lg={6}>
                <div className='d-flex align-items-center'>
                  <img src={Img2} width={'100%'} />
                </div>
              </Col>
            </Row>
            <Row className='my-5 media-remove-margin'>
              <Col sm={12} md={12} lg={6}>
                <div className='d-flex align-items-center'>
                  <img src={Img2} width={'100%'} />
                </div>
              </Col>
              <Col
                sm={12}
                md={12}
                lg={6}
                className='my-4 p-0 my-md-5 p-md-5 text-start text-secondary d-flex justify-content-center'
              >
                <div className='w-75'>
                  <h3 className='color-Purple mb-3'>
                    We Are Excellent in Education
                  </h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <p>
                    <span className='icon-roundend  color-BgPurple mx-4 '>
                      <FaGraduationCap size={20} color='white' />
                    </span>
                    22,913 Yearly Gradute
                  </p>
                  <p>
                    <span className='mx-4 icon-roundend  color-BgPurple'>
                      <FaUniversity size={20} color='white' />
                    </span>
                    150 Universities World Wide
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
};

export default Programs;
