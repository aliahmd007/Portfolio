// import { Container, Row, Col, Navbar, Nav, Form, Button, Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Home() {
//   return (
//     <div className="bg-light py-5 text-center">
//       <Container>
//         <h1 className="display-4 fw-bold text-primary">Welcome to My Portfolio</h1>
//         <p className="lead text-secondary">I am a passionate web developer</p>
//       </Container>
//     </div>
//   );
// }
// export default Home;


import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgself from '../img/Adobe Express - file.png';

function Home() {
  return (
    <div className="bg-light text-dark min-vh-100">
      {/* Hero Section */}
      <div className="py-5 text-center bg-white shadow-sm">
        <Container>
          <h1 className="display-4 fw-bold text-primary">Welcome to My Portfolio</h1>
          <p className="lead text-secondary">
            I'm <strong>Aashaq Rasool Sabri</strong>, a passionate full-stack web developer dedicated to building fast, responsive, and modern web applications.
          </p>
          
        </Container>
      </div>

      {/* About Brief */}
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src={imgself}
              style={{  maxHeight: '50vh', objectFit: 'contain', width: '100%', marginBottom:'20px'}}
             />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold text-primary">Who Am I?</h2>
            <p className="text-muted">
              I am a results-driven developer with experience in building full-stack web apps using technologies like React, Node.js, MySQL, and Firebase.
              I love clean design, powerful logic, and transforming ideas into functional web solutions.
            </p>
            <p className="text-muted">
              Whether it’s crafting a landing page, building an API, or deploying a full-stack solution, I strive for excellence and performance.
            </p>
          </Col>
        </Row>
      </Container>

      {/* What I Do Section */}
      <div className="bg-white py-5">
        <Container>
          <h2 className="text-center fw-bold mb-4">What I Do</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary fw-semibold">Frontend Development</Card.Title>
                  <Card.Text>
                    I build responsive, mobile-friendly, and modern interfaces using HTML, CSS, JavaScript, React, and Bootstrap.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary fw-semibold">Backend Development</Card.Title>
                  <Card.Text>
                    I design secure APIs and server-side logic using Node.js, Express, and MySQL. I also work with Firebase and RESTful architecture.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary fw-semibold">Tools & Deployment</Card.Title>
                  <Card.Text>
                    I use Git, GitHub, VS Code, Netlify, Vercel, and Figma to collaborate and deploy high-quality projects efficiently.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
