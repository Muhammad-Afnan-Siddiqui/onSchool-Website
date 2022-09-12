import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Img1 from '../assets/undraw_teacher.svg';
import Img2 from '../assets/undraw_teaching (1).svg';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';

const Programs = () => {
  return (
    <section className='onSchool-Programs'>
      <div className='Top-Section'>
        <Container>
          <div className='max-width'>
            <h1 className='Heading'>
              <b>Our Programs</b>
            </h1>
            <p className='text-secondary'>
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
            <Col sm={12} md={6} lg={6}>
              <div className='Programs-Card-Img'>
                <img src={Img1} alt='img1' className='w-100 ' />
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className='Programs-CardContent-Top-alignment text-secondary max-width '>
                <div className='Programs-CardContent-Top'>
                  <h3 className='text-dark mb-3'>
                    We Are Excellent in Education
                  </h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div className='Programs-CardContent-Bottom-Section'>
                  <div className='Programs-CardContent-Bottom'>
                    <div className='icon'>
                      <p>
                        <span className='icon-roundend  color-BgPurple '>
                          <FaGraduationCap size={20} color='white' />
                        </span>
                      </p>
                    </div>
                    <div className='icon-description'>
                      <p className='mx-2 color-Purple'>
                        22,931 Yearly Graduate
                      </p>
                    </div>
                  </div>
                  <div className='Programs-CardContent-Bottom'>
                    <div className='icon'>
                      <p>
                        <span className='icon-roundend  color-BgPurple '>
                          <FaUniversity size={20} color='white' />
                        </span>
                      </p>
                    </div>
                    <div className='icon-description'>
                      <p className='mx-2 color-Purple'>
                        150 Universities World Wide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ span: 12, order: 1 }}
              sm={{ span: 12, order: 1 }}
              md={{ span: 6, order: 2 }}
              lg={{ span: 6, order: 2 }}
            >
              <div className='Programs-Card-Img '>
                <img src={Img2} alt='img2' className='img-fluid ' />
              </div>
            </Col>
            <Col
              xs={{ span: 12, order: 2 }}
              sm={{ span: 12, order: 2 }}
              md={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
            >
              <div className='Programs-CardContent-Top-alignment text-secondary max-width '>
                <div className='Programs-CardContent-Top'>
                  <h3 className='text-dark mb-3'>
                    We Are Excellent in Education
                  </h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div className='Programs-CardContent-Bottom-Section'>
                  <div className='Programs-CardContent-Bottom'>
                    <div className='icon'>
                      <p>
                        <span className='icon-roundend  color-BgPurple '>
                          <FaGraduationCap size={20} color='white' />
                        </span>
                      </p>
                    </div>
                    <div className='icon-description'>
                      <p className='mx-2 color-Purple'>
                        22,931 Yearly Graduate
                      </p>
                    </div>
                  </div>
                  <div className='Programs-CardContent-Bottom'>
                    <div className='icon'>
                      <p>
                        <span className='icon-roundend  color-BgPurple '>
                          <FaUniversity size={20} color='white' />
                        </span>
                      </p>
                    </div>
                    <div className='icon-description'>
                      <p className='mx-2 color-Purple'>
                        150 Universities World Wide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <div className='Programs-Card-Img '>
                <img src={Img2} alt='img3' className='w-100' />
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className='Programs-CardContent-Top-alignment text-secondary max-width '>
                <div className='Programs-CardContent-Top'>
                  <h3 className='text-dark mb-3'>
                    We Are Excellent in Education
                  </h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div className='Programs-CardContent-Bottom-Section'>
                  <div className='Programs-CardContent-Bottom '>
                    <div className='icon'>
                      <p>
                        <span className='icon-roundend  color-BgPurple '>
                          <FaGraduationCap size={20} color='white' />
                        </span>
                      </p>
                    </div>
                    <div className='icon-description'>
                      <p className='mx-2 color-Purple'>
                        22,931 Yearly Graduate
                      </p>
                    </div>
                  </div>
                  <div className='Programs-CardContent-Bottom '>
                    <div className='icon'>
                      <p>
                        <span className='icon-roundend  color-BgPurple '>
                          <FaUniversity size={20} color='white' />
                        </span>
                      </p>
                    </div>
                    <div className='icon-description'>
                      <p className='mx-2 color-Purple'>
                        150 Universities World Wide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Programs;
