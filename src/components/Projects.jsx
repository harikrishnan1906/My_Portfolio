import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import "../styles/project.css";

const projects = [
  {
    title: "HomeSchooling",

    image: "frontend/src/assets/images/oceanFresh.png",

    description:
      "Modern responsive educational website with hero slider, live classes section, and clean UI design.",

    technologies: ["HTML", "CSS", "JavaScript"],

    gitHubLink: "https://github.com/harikrishnan1906/home-Schooling",

    websiteLink: "https://home-schooling-neon.vercel.app/",
  },

  {
    title: "Smart Book Administration",

    image: "frontend/src/assets/images/smartBookAdministration.png",

    description:
      "Full‑stack web‑based library management system with automated book issue/return and fine‑calculation module for multi‑user academic environments.",

    technologies: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],

    gitHubLink: "https://github.com/harikrishnan1906/Smart-Book-Administration",

    websiteLink: "https://smart-book-administration.vercel.app/",
  },

  {
    title: "OceanFresh",

    image: "frontend/src/assets/images/oceanFresh.png",

    description:
      "Full Stack fish e-commerce platform with customer feedback optimization system for multi-branch retail management.",

    technologies: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],

    gitHubLink: "https://github.com/harikrishnan1906/Ocean-Fresh",

    websiteLink: "https://ocean-fresh-6k37-two.vercel.app/",
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
                      <a
                        href={project.gitHubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="project-btn">
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
