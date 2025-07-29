// import { Container, Row, Col, Navbar, Nav, Form, Button, Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// function Skills() {
//   const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
//   return (
//     <Container className="mt-5">
//       <h2 className="mb-4 text-primary">Skills</h2>
//       <Row>
//         {skills.map((skill, index) => (
//           <Col key={index} md={4} className="mb-4">
//             <Card className="shadow-sm border-0 text-center">
//               <Card.Body>
//                 <Card.Title className="fw-bold text-info">{skill}</Card.Title>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default Skills;

// src/components/Skills.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () => {
  const skills = {
    'Front-End': [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React.js', level: 80 },
      { name: 'Bootstrap', level: 90 },
    ],
    'Back-End': [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 75 },
      { name: 'MySQL', level: 70 },
      { name: 'Firebase', level: 65 },
    ],
    'Tools & Platforms': [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma', level: 70 },
      { name: 'Netlify / Vercel', level: 80 },
    ],
  };

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">My Skills</h2>

      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="mb-5">
          <h4 className="mb-3">{category}</h4>
          {skillList.map((skill) => (
            <div key={skill.name} className="mb-3">
              <div className="d-flex justify-content-between">
                <span className="fw-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="progress" style={{ height: '8px' }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: `${skill.level}%` }}
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
