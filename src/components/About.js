// import { Container, Row, Col, Navbar, Nav, Form, Button, Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// function About() {
//   return (
//     <Container className="mt-5">
//       <h2 className="mb-4 text-primary">About Me</h2>
//       <p className="text-muted">
//         I am a React developer with experience in building beautiful and responsive websites.
//       </p>
//     </Container>
//   );
// }

// export default About;

// src/components/About.js

import 'bootstrap/dist/css/bootstrap.min.css';
import imgself from '../img/Adobe Express - file.png';


const About = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center about-section p-4 bg-white rounded shadow">
        <div className="col-md-5 mb-4 mb-md-0">
          <img
            src={imgself}
            alt="Aashaq Rasool Sabri"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-7">
          <h2 className="mb-3 fw-bold">About Me - Aashaq Rasool Sabri</h2>
          <p className="mb-4 text-muted">
            I am a passionate and creative <strong>Web Developer</strong> with a strong background in building responsive, high-performance websites and web apps.
            I specialize in front-end technologies like HTML5, CSS3, JavaScript, and modern frameworks like React and Bootstrap. My goal is to craft seamless user experiences and visually engaging websites.
          </p>
          <h5 className="mb-2">Professional Highlights:</h5>
          <ul className="text-muted">
            <li>3+ years of experience in full-stack web development</li>
            <li>Expert in responsive design & UI/UX best practices</li>
            <li>Built 20+ projects </li>
            <li>Strong understanding of REST APIs and Firebase</li>
            <li>Currently learning Next.js </li>
          </ul>
          <h5 className="mt-4 mb-2">My Key Skills:</h5>
          <div className="d-flex flex-wrap gap-2">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Node.js', 'MySQL'].map(skill => (
              <span key={skill} className="badge bg-primary">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
