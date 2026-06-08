import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

import "../styles/contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d1lt8qz",
        "template_3jps6mm",
        form.current,
        "J0MI97WMtKBFDxtGE",
      )

      .then(() => {
        alert("Message Sent Successfully ✅");

        e.target.reset();
      })

      .catch((error) => {
        console.log(error);

        alert("Something went wrong ❌");
      });
  };
  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="section-title">Contact Me</h2>

        <Row className="g-4">
          <Col lg={5}>
            <div className="contact-info" data-aos="fade-right">
              <h3>Let's Connect</h3>

              <p>
                I’m open to internships, freelance work, and full-time
                opportunities related to Full Stack Development.
              </p>

              <Card className="contact-card">
                <Card.Body>
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>

                  <div>
                    <h5>Email</h5>

                    <span>harikrishnan.k1906@gmail.com</span>
                  </div>
                </Card.Body>
              </Card>

              <Card className="contact-card">
                <Card.Body>
                  <div className="contact-icon">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <h5>Phone</h5>

                    <span>+91 9500375058</span>
                  </div>
                </Card.Body>
              </Card>

              <Card className="contact-card">
                <Card.Body>
                  <div className="contact-icon">
                    <FaGithub />
                  </div>

                  <div>
                    <a
                      href="https://github.com/harikrishnan1906"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h5>GitHub</h5>

                      <span>github.com/harikrishnan1906</span>
                    </a>
                  </div>
                </Card.Body>
              </Card>

              <Card className="contact-card">
                <Card.Body>
                  <div className="contact-icon">
                    <FaLinkedin />
                  </div>

                  <div>
                    <a
                      href="https://www.linkedin.com/in/hari-krishnan-kamaraj-b17628313/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h5>LinkedIn</h5>

                      <span>linkedin.com/in/hari-krishnan-kamaraj-dev</span>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col lg={7}>
            <Card className="contact-form-card" data-aos="fade-left">
              <Card.Body>
                <Form onSubmit={sendEmail} ref={form}>
                  <Form.Group className="mb-4">
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      name="from_name"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control
                      type="email"
                      name="from_email"
                      required
                      placeholder="Your Email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control
                      as="textarea"
                      rows={6}
                      placeholder="Your Message"
                      name="message"
                      required
                    />
                  </Form.Group>

                  <Button type="submit" className="custom-btn w-100">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
