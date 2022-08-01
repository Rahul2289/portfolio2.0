import React from "react";
import { projectsData } from "./../accets/data/ProjectsData";
import Button from "./../utils/Button";
import { AiOutlineGithub, AiOutlineEye } from "react-icons/ai";
import { Container } from "./../styles/projectStyles";

const Projects = () => {
  return (
    <Container>
      <h1 id="projects" data-aos="zoom-in">
        projects
      </h1>
      <div className="wrapper">
        {projectsData.map((data) => (
          <div className="outer-div" key={data.id} data-aos="fade-up">
            <p>{data.title}</p>
            <div className="top">
              <img src={data.img} alt={data.title} data-aos="zoom-in" />
            </div>
            <div className="bottom">
              <button className="btn-group">
                <Button
                  size={10}
                  bgcolor="rgba(22, 30, 53, 1) "
                  color="#ff0a45"
                  link={data.demoLink}
                >
                  <span>view</span>
                  <span>
                    <AiOutlineEye />
                  </span>
                </Button>
                <Button
                  size={10}
                  bgcolor="rgba(22, 30, 53, 1) "
                  color="#ff0a45"
                  link={data.gitHubLink}
                >
                  <span>code</span>
                  <span>
                    <AiOutlineGithub />
                  </span>
                </Button>
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Projects;
