import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Img1 from '../assets/undraw_teacher.svg';
import Img2 from '../assets/undraw_teaching (1).svg';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';

const Programs = () => {
  return (
    <div className='onSchool-Programs'>
      <div className='Programs'>
        <section>
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
        <section>
          <Container>
            <Row className='my-5'>
              <Col md={6}>
                <div>
                  <img src={Img1} width={'100%'} />
                </div>
              </Col>
              <Col md={6} className='my-5 p-5 text-start text-secondary'>
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
                    <span className='d-inline justify-content-center align-items-center mx-4 rounded-circle color-BgPurple '>
                      <FaGraduationCap size={20} color='white' />
                    </span>
                    22,913 Yearly Gradute
                  </p>
                  <p>
                    <span className='mx-4 rounded-circle color-BgPurple'>
                      <FaUniversity size={20} color='white' />
                    </span>
                    150 Universities WorldWide
                  </p>
                </div>
              </Col>
            </Row>
            <Row className='my-5'>
              <Col md={6} className='my-5 p-5 text-start text-secondary'>
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
                    <span className='d-inline justify-content-center align-items-center mx-4 rounded-circle color-BgPurple '>
                      <FaGraduationCap size={20} color='white' />
                    </span>
                    22,913 Yearly Gradute
                  </p>
                  <p>
                    <span className='mx-4 rounded-circle color-BgPurple'>
                      <FaUniversity size={20} color='white' />
                    </span>
                    150 Universities WorldWide
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div>
                  <img src={Img2} width={'100%'} />
                </div>
              </Col>
            </Row>
            <Row className='my-5'>
              <Col md={6}>
                <div>
                  <img src={Img1} width={'100%'} />
                </div>
              </Col>
              <Col md={6} className='my-5 p-5 text-start text-secondary'>
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
                    <span className='d-inline justify-content-center align-items-center mx-4 rounded-circle color-BgPurple '>
                      <FaGraduationCap size={20} color='white' />
                    </span>
                    22,913 Yearly Gradute
                  </p>
                  <p>
                    <span className='mx-4 rounded-circle color-BgPurple'>
                      <FaUniversity size={20} color='white' />
                    </span>
                    150 Universities WorldWide
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
