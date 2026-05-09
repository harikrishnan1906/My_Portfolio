import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/hero.css";
import profileImage from "../assets/images/portfolio-profile.png";
import resumeFile from '../assets/resume/Hari_Krishnan_resume.pdf';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="hero-content" data-aos="fade-right">
              <p className="hero-subtitle">Hello, I'm</p>

              <h1 className="hero-title">Hari Krishnan</h1>

              <h2 className="hero-role">MERN Stack Developer</h2>

              <p className="hero-description">
                Passionate Full Stack Developer focused on building responsive,
                scalable, and user-friendly web applications using modern
                technologies.
              </p>

              <div className="hero-buttons">
                <a href="#projects">
                  <Button className="custom-btn">View Projects</Button>
                </a>

                <a href={resumeFile} download="Hari_Krishnan_resume.pdf">
                  <Button className="resume-btn">Download Resume</Button>
                </a>
              </div>

              <div className="social-icons">
                <a href="#">
                  <FaGithub />
                </a>

                <a href="#">
                  <FaLinkedin />
                </a>

                <a href="#">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="hero-image" data-aos="fade-left">
              <img
                src={profileImage}
                alt="Hari Krishnan"
                className="image-circle"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
