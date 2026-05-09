import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import "../styles/project.css";

const projects = [
  {
    title: "OceanFresh",

    description:
      "Full Stack fish e-commerce platform with customer feedback optimization system for multi-branch retail management.",

    technologies: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
  },

  {
    title: "Veterinary Appointment System",

    description:
      "Web-based veterinary appointment booking platform with user and admin functionalities.",

    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },

  {
    title: "HomeSchooling Website",

    description:
      "Modern responsive educational website with hero slider, live classes section, and clean UI design.",

    technologies: ["React", "Bootstrap", "CSS", "JavaScript"],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-title">My Projects</h2>

        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="project-card" data-aos="fade-up">
                <div className="project-image">
                  <div className="image-placeholder">Project Image</div>
                </div>

                <Card.Body>
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <Badge bg="primary" key={i}>
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="project-buttons">
                    <Button className="project-btn">
                      <FaGithub />
                      GitHub
                    </Button>

                    <Button variant="outline-light" className="project-btn">
                      <FaExternalLinkAlt />
                      Live Demo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
