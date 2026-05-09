import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import { SiExpress, SiMongodb, SiBootstrap } from "react-icons/si";

import "../styles/skills.css";

const skills = [
  {
    title: "HTML5",
    icon: <FaHtml5 />,
  },

  {
    title: "CSS3",
    icon: <FaCss3Alt />,
  },

  {
    title: "JavaScript",
    icon: <FaJs />,
  },

  {
    title: "React.js",
    icon: <FaReact />,
  },

  {
    title: "Bootstrap",
    icon: <SiBootstrap />,
  },

  {
    title: "Node.js",
    icon: <FaNodeJs />,
  },

  {
    title: "Express.js",
    icon: <SiExpress />,
  },

  {
    title: "MongoDB",
    icon: <SiMongodb />,
  },

  {
    title: "Git",
    icon: <FaGitAlt />,
  },

  {
    title: "GitHub",
    icon: <FaGithub />,
  },

  {
    title: "VS Code",
    icon: <FaCode />,
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="section-title">My Skills</h2>

        <Row>
          {skills.map((skill, index) => (
            <Col lg={3} md={4} sm={6} key={index} className="mb-4">
              <Card className="skill-card" data-aos="zoom-in">
                <Card.Body>
                  <div className="skill-icon">{skill.icon}</div>

                  <h4>{skill.title}</h4>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
