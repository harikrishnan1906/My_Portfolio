import { Container, Row, Col } from "react-bootstrap";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="footer-content">
              <h3>
                Hari{" "}<span>Krishnan</span>
              </h3>

              <p>
                MERN Stack Developer passionate about building modern and
                user-friendly web applications.
              </p>
            </div>
          </Col>

          <Col lg={6}>
            <div className="footer-right">
              <ul className="footer-links">
                <li>
                  <a href="#home">Home</a>
                </li>

                <li>
                  <a href="#about">About</a>
                </li>

                <li>
                  <a href="#skills">Skills</a>
                </li>

                <li>
                  <a href="#projects">Projects</a>
                </li>

                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>

              <div className="footer-socials">
                <a href="https://github.com/harikrishnan1906">
                  <FaGithub />
                </a>

                <a href="www.linkedin.com/in/hari-krishnan-kamaraj-b17628313">
                  <FaLinkedin />
                </a>

                <a href="mailto:harikrishnan.k1906@email.com">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p>© 2026 Hari Krishnan. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
