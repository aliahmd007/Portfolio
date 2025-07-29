// // src/components/Footer.js
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Footer() {
//   return (
//     <footer className="bg-dark text-light py-4 mt-2">
//       <Container>
//         <Row className="text-center text-md-start">
//           <Col md={6}>
//             <h5 className="fw-bold">Aashaq Rasool Sabri</h5>
//             <p className="small">
//               Full-Stack Web Developer & Problem Solver. I build modern, responsive, and dynamic websites.
//             </p>
//           </Col>
         
//           <Col md={3} className="mt-3 mt-md-0">
//             <h6 className="fw-semibold">Follow Me</h6>
//             <ul className="list-unstyled">
//               <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">GitHub</a></li>
//               <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">LinkedIn</a></li>
//               <li><a href="mailto:your-email@example.com" className="text-light text-decoration-none">Email Me</a></li>
//             </ul>
//           </Col>
//         </Row>
        
//         <hr className="border-light mt-4" />
//         <div className="text-center small">
//           &copy; {new Date().getFullYear()} Aashaq Rasool Sabri. All rights reserved.
//         </div>
//       </Container>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-light py-2">
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
