

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-light py-2 d-flex flex-column min-vh-100">
      <Container>
        <Row className="text-center text-md-start align-items-center">
          <Col md={6} className="mb-2 mb-md-0">
            <h6 className="mb-1 fw-bold">Aashaq Rasool Sabri</h6>
            <p className="mb-0 small">
              Web Developer | React | Node.js | MySQL
            </p>
          </Col>
          <Col md={3} className="text-center">
            <h6 className="fw-semibold">Follow Me</h6>
            <a href="https://github.com/aliahmd007" className="text-light text-decoration-none small me-3">GitHub</a>
            <a href="https://www.linkedin.com/in/sabri-gondal-94b739326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
            " className="text-light text-decoration-none small me-3">LinkedIn</a>
            <a href="/contact" className="text-light text-decoration-none small">Email Me</a>
          </Col>
          <Col md={3} className="text-md-end">
            <p className="mb-0 small">&copy; {new Date().getFullYear()}Aashaq Rasool Sabri. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
