import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import "../styles/project.css";

const projects = [
  {
    title: "OceanFresh",

    description:
      "Full Stack fish e-commerce platform with customer feedback optimization system for multi-branch retail management.",

    technologies: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],

    gitHubLink: "https://github.com/harikrishnan1906/Ocean-Fresh",

    websiteLink:
      "https://ocean-fresh-6k37-git-main-hari-krishnans-projects-56f0c02d.vercel.app/",
  },

  {
    title: "Veterinary Appointment System",

    description:
      "Web-based veterinary appointment booking platform with user and admin functionalities.",

    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    gitHubLink: "sample",

    websiteLink: "sample",
  },

  {
    title: "HomeSchooling Website",

    description:
      "Modern responsive educational website with hero slider, live classes section, and clean UI design.",

    technologies: ["React", "Bootstrap", "CSS", "JavaScript"],
    gitHubLink: "sample",
    websiteLink: "sample",
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
                    <div>
                      <a href={project.gitHubLink}>
                        <Button
                          className="project-btn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub />
                          GitHub
                        </Button>
                      </a>
                    </div>

                    <div>
                      <a
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline-light" className="project-btn">
                          <FaExternalLinkAlt />
                          Live Demo
                        </Button>
                      </a>
                    </div>
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
