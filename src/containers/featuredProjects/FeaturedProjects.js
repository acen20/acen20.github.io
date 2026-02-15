import React, { useContext } from "react";
import "./FeaturedProjects.scss";
import { featuredProjects } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import ProjectCard from "../../components/projectCard/ProjectCard";

export default function FeaturedProjects() {
  const { isDark } = useContext(StyleContext);

  if (!featuredProjects.display) return null;

  return (
    <div className="main" id="featured-projects">
      <div className="container">
        <h1 className="skills-heading">{featuredProjects.title}</h1>
        <p className={isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"}>
          {featuredProjects.subtitle}
        </p>

        <div className="featured-projects-container">
          {featuredProjects.projects.map((project, i) => (
            <ProjectCard key={i} project={project} isDark={isDark} />
          ))}
        </div>
      </div>
    </div>
  );
}
