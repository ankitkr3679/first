import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={6} sm={6} lg={3} className='mb-4  mb-lg-0'>
            <div className='text-center'>
              <h5>Location</h5>
              <p>North East, District</p>
              <p>Dr, Miami, FL 33126</p>
              <p>India</p>
            </div>
          </Col>
          <Col  xs={6} sm={6} lg={3} className='mb-4   mb-lg-0'>
            <div className='text-center'>
              <h5>Working Hours</h5>
              <p>Mon-Fri: 9:00AM - 10:00PM</p>
              <p>Saturday: 10:00AM - 8:30PM</p>
              <p>Sunday: 12:00PM - 5:00PM</p>
            </div>
          </Col>
          <Col xs={6} sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-center'>
              <h5>Order Now</h5>
              <p>Quaerat neque purus ipsum</p>
              <p>
                <Link to="tel:999888777" className='calling'>
                  999-888-777
                </Link>
              </p>
            </div>
          </Col>
          <Col xs={6} sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className='text-center'>
              <h5>Follow Us</h5>
              <p>Quaerat neque purus ipsum</p>
              <ul className='list-unstyled text-center mt-2'>
                <li>
                  <Link to="/">
                    <i className='bi bi-facebook'></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className='bi bi-twitter'></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className='bi bi-instagram'></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className='bi bi-youtube'></i>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className='copy_right'>
          <Col>
            <div>
              <ul className='list-unstyled text-center mb-0'>
                <li>
                  <Link to="/">
                    © 2025 <span>Ankit_Kumar</span>. All Rights Reserved
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Terms Of Use
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Privacy Policy
                  </Link>
                </li>

              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer