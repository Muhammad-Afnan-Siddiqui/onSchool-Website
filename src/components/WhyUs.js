import React from 'react';
import Benjamin from '../assets/xperson_transparent.png.pagespeed.ic.QLbGZHruxs.png';
import { Container, Card } from 'react-bootstrap';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <div className='onSchool-WhyUs vh-100 position-relative'>
      <section className='Main '>
        <Container>
          <div className='onSchool-WhyUs-Content py-5 '>
            <div className='Heading my-5'>
              <h1>
                <b>Why Choose US</b>
              </h1>
            </div>

            <div className='Card text-start text-dark'>
              <Card
                className='shadow-lg  bg-white border-0 p-4'
                style={{ width: '450px' }}
              >
                <Card.Body className='py-5'>
                  <Card.Text className='d-flex align-items-center'>
                    <span className='mx-3  icon-roundend  color-BgPurple '>
                      <FaGraduationCap color='white' size={30} />
                    </span>{' '}
                    Lorem Ipsum has been the industry's
                  </Card.Text>
                  <Card.Text className='d-flex align-items-center'>
                    <span className='mx-3 icon-roundend  color-BgPurple'>
                      <FaUniversity color='white' size={30} />
                    </span>{' '}
                    Lorem Ipsum has been
                  </Card.Text>
                  <Card.Text className='d-flex align-items-center'>
                    <span className='mx-3 icon-roundend  color-BgPurple'>
                      <FaGraduationCap color='white' size={30} />
                    </span>{' '}
                    Lorem Ipsum has been the industry's
                  </Card.Text>
                  <Card.Text className='d-flex align-items-center'>
                    <span className='mx-3 icon-roundend  color-BgPurple'>
                      <FaUniversity color='white' size={30} />
                    </span>
                    Lorem Ipsum has been the industry's
                  </Card.Text>
                  <Card.Text className='d-flex align-items-center'>
                    <span className='mx-3 icon-roundend  color-BgPurple'>
                      <FaGraduationCap color='white' size={30} />
                    </span>
                    Lorem Ipsum has been the industry's
                  </Card.Text>
                  <Card.Text className='d-flex align-items-center'>
                    <span className='mx-3 icon-roundend  color-BgPurple  '>
                      <FaUniversity color='white' size={30} />
                    </span>
                    Lorem Ipsum has been the industry'ss
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </section>
      <img
        src={Benjamin}
        alt=' Benjamin'
        className='position-absolute benjamin-side-img'
      />
    </div>
  );
};

export default WhyUs;
