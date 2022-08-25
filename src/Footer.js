import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
  return (
    <div className='onSchool-Footer'>
      <Container>
        <Row>
          <Col md={4}>
            <div className='Footer-Right-Conter'></div>
          </Col>
          <Col md={4}>
            <div className='Footer-Center-Conter'></div>
          </Col>
          <Col md={4}>
            <div className='Footer-left-Conter'></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
