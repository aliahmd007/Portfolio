// import { Container, Row, Col, Navbar, Nav, Form, Button, Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// function Projects() {
//   const projects = [
//     { title: 'Portfolio Website', description: 'A personal website built with React.' },
//     { title: 'Task Manager', description: 'Manage daily tasks using React and Node.js.' },
//   ];
//   return (
//     <Container className="mt-5">
//       <h2 className="mb-4 text-primary">Projects</h2>
//       <Row>
//         {projects.map((project, index) => (
//           <Col key={index} md={6} className="mb-4">
//             <Card className="shadow-sm border-0 h-100">
//               <Card.Body>
//                 <Card.Title className="text-success">{project.title}</Card.Title>
//                 <Card.Text className="text-muted">{project.description}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default Projects;

import { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Form, Button, Card, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../img/currency converter.png';
import img2 from '../img/tik tack game.png';
import img3 from '../img/wather app.png';
import myweb from '../img/Portfolio.JPG';


function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'E-Commerace',
      description: 'A personal website ',
      image:img1 ,
    },
    {
      title: 'Currency Converter App',
      description: 'Currency Converter App Convert one Currency to another eg. PKR to INR ',
      image: img1,
    },
    
    {
      title: 'Wather App',
      description: 'Wather App Using Weather API',
      image: img3,
    },
    ,
    {
      title: 'Tik Tack To ',
      description: 'This is a game for two players ',
      image: img2,
    },
    {
      title: 'My Portfolio ',
      description: 'My Portfolio Website',
      image: myweb,
    },
  ];

  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-primary">Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={6} className="mb-4">
            <Card
              className="shadow-sm border-0 h-100 cursor-pointer"
              onClick={() => handleShow(project)}
              style={{ cursor: 'pointer' }}
            >
              <Card.Body>
                <Card.Title className="text-success">{project.title}</Card.Title>
                <Card.Text className="text-muted">{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal to show project details */}
      <Modal show={showModal} onHide={handleClose} centered size="lg" style={{marginTop:'40px'}} >
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <img
            src={selectedProject?.image}
            alt={selectedProject?.title}
            // className="img-fluid"
            style={{  maxHeight: '50vh', objectFit: 'contain', width: '100%', marginBottom:'20px' }}
            
          />
          <h5>{selectedProject?.description}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Projects;
