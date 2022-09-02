import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import Blog1 from '../assets/blob_1 (1).svg';
import Blog2 from '../assets/blob_2 (1).svg';
import Benjamin from '../assets/xperson_transparent.png.pagespeed.ic.QLbGZHruxs.png';

const WhyUs = () => {
  return (
    <section className='onSchool-WhyUs py-5  position-relative'>
      <div className='Top-Section why-padding '>
        <Container>
          <h1 className='why-padding'>
            <b>Why Choose US</b>
          </h1>
        </Container>
      </div>
      <div className='Middle-Section '>
        <Container>
          <Card className='Card shadow-lg bg-white border-0 p-1  p-lg-5 mw-40 '>
            <Card.Body className='alignment '>
              <Card.Text className='mb-0'>
                <span className='mx-3 icon-roundend  color-BgPurple'>
                  <FaGraduationCap color='white' size={30} />
                </span>
              </Card.Text>
              <Card.Text className='text-center '>
                Lorem Ipsum has been the industry's
              </Card.Text>
            </Card.Body>
            <Card.Body className='alignment '>
              <Card.Text className='mb-0'>
                <span className='mx-3 icon-roundend  color-BgPurple  '>
                  <FaUniversity color='white' size={30} />
                </span>
              </Card.Text>
              <Card.Text className='text-center mb-0'>
                Lorem Ipsum has been the industry's
              </Card.Text>
            </Card.Body>
            <Card.Body className='alignment'>
              <Card.Text className='mb-0'>
                <span className='mx-3 icon-roundend  color-BgPurple  '>
                  <FaGraduationCap color='white' size={30} />
                </span>
              </Card.Text>
              <Card.Text className='text-center'>
                Lorem Ipsum has been the industry's
              </Card.Text>
            </Card.Body>
            <Card.Body className='alignment'>
              <Card.Text className='mb-0'>
                <span className='mx-3 icon-roundend  color-BgPurple  '>
                  <FaUniversity color='white' size={30} />
                </span>
              </Card.Text>
              <Card.Text className='text-center'>
                Lorem Ipsum has been the industry's
              </Card.Text>
            </Card.Body>
            <Card.Body className='alignment'>
              <Card.Text className='mb-0'>
                <span className='mx-3 icon-roundend  color-BgPurple  '>
                  <FaGraduationCap color='white' size={30} />
                </span>
              </Card.Text>
              <Card.Text className='text-center'>
                Lorem Ipsum has been the industry's
              </Card.Text>
            </Card.Body>
            <Card.Body className='alignment'>
              <Card.Text className='mb-0'>
                <span className='mx-3 icon-roundend  color-BgPurple  '>
                  <FaUniversity color='white' size={30} />
                </span>
              </Card.Text>
              <Card.Text className='text-center'>
                Lorem Ipsum has been the industry'ss
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
      <img
        src={Benjamin}
        alt=' Benjamin'
        className='img-fluid benjamin-side-img'
      />
      <img src={Blog1} alt=' Blog2' className='img-fluid blog1-side-img' />
      <img src={Blog2} alt=' Blog2' className='img-fluid blog2-side-img' />
    </section>
  );
};

export default WhyUs;
