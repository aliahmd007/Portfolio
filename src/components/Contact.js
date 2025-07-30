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





import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ show: false, type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ show: false, type: '', message: '' });

    try {
      const response = await fetch('https://vercel-back-eight.vercel.app/api/send-email', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        mode: 'cors', // Explicitly set CORS mode
        credentials: 'include', // Include credentials if needed
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }

      const data = await response.json();
      setStatus({ show: true, type: 'success', message: data.message });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setStatus({ 
        show: true, 
        type: 'danger', 
        message: error.message || 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="my-5" id="contact">
      <h2 className="text-center mb-4">Contact Me</h2>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          {status.show && (
            <Alert variant={status.type} onClose={() => setStatus({...status, show: false})} dismissible>
              {status.message}
            </Alert>
          )}
          
          <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                placeholder="Your name"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                placeholder="your.email@example.com"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                value={formData.message}
                placeholder="Your message here..."
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button 
              variant="primary" 
              type="submit" 
              disabled={isSubmitting}
              className="w-100"
            >
              {isSubmitting ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                  <span className="ms-2">Sending...</span>
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;