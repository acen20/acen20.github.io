import React, {useContext} from "react";
import "./FeaturedProjects.scss";
import {featuredProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import ProjectCard from "../../components/projectCard/ProjectCard";

export default function FeaturedProjects() {
  const {isDark} = useContext(StyleContext);
  
  if (!featuredProjects.display) {
    return null;
  }
  
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="featured-projects">
        <div>
          <h1 className="skills-heading">{featuredProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {featuredProjects.subtitle}
          </p>

          <div className="featured-projects-container">
            {featuredProjects.projects.map((project, i) => {
              return (
                <ProjectCard
                  key={i}
                  project={project}
                  isDark={isDark}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
