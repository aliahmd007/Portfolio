// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('https://portfolio-hfwa.vercel.app/contact/send-email', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       alert(data.message);

//       // Reset form after successful submission
//       if (response.ok) {
//         setFormData({ name: '', email: '', message: '' });
//       }
//     } catch (error) {
//       console.error('Error sending message:', error);
//       alert('Failed to send message. Please try again later.');
//     }
//   };

//   return (
//     <Container className="mt-5 mb-5">
//       <h2 className="mb-4 text-primary">Contact Me</h2>
//       <Row className="justify-content-center">
//         <Col md={8}>
//           <Form className="p-4 border rounded shadow-sm bg-light" onSubmit={handleSubmit}>
//             <Form.Group className="mb-3" controlId="formName">
//               <Form.Label className="fw-bold">Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 placeholder="Enter your name"
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formEmail">
//               <Form.Label className="fw-bold">Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 placeholder="Enter your email"
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formMessage">
//               <Form.Label className="fw-bold">Message</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={4}
//                 name="message"
//                 value={formData.message}
//                 placeholder="Write your message..."
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Button variant="primary" type="submit" className="w-100 fw-bold">
//               Send Message
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Contact;


// //  try {
// //       const response = await fetch('https://vercel-back-eight.vercel.app/api/send-email'



/////////////////////////////////////////////

import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wap089c',     // Replace with your actual Service ID
        'template_k0rpi7m',    // Replace with your actual Template ID
        formRef.current,
        'BLuqIdHtpYo1oTPHU'      // Replace with your actual Public Key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('EmailJS error:', error.text);
          alert('Failed to send message. Try again later.');
        }
      );
  };

  return (
    <Container className="mt-5 mb-5">
      <h2 className="mb-4 text-primary">Contact Me</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <Form
            ref={formRef}
            className="p-4 border rounded shadow-sm bg-light"
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label className="fw-bold">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="fw-bold">Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label className="fw-bold">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                placeholder="Write your message..."
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 fw-bold">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;


