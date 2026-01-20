import React from "react";
import "./ProjectCard.scss";

export default function ProjectCard({project, isDark}) {
  const getFullDescription = () => {
    const base = (project.description || "").trim();
    const bullets = Array.isArray(project.descBullets)
      ? project.descBullets.map(s => String(s).trim()).filter(Boolean)
      : [];

    if (bullets.length === 0) return base;
    if (!base) return bullets.join(" ");

    return `${base} ${bullets.join(" ")}`.trim();
  };

  return (
    <div
      className={
        isDark
          ? "project-card project-card-dark"
          : "project-card project-card-light"
      }
    >
      {project.image ? (
        <div className="project-image">
          <img
            src={project.image}
            alt={project.title}
            className="card-image"
          ></img>
        </div>
      ) : (
        <div className="project-image-placeholder">
          <span className="placeholder-text">Image Placeholder</span>
        </div>
      )}
      <div className="project-detail">
        <h5 className="card-title">{project.title}</h5>
        <hr className="project-divider" />
        <p className="card-description">{getFullDescription()}</p>
        {project.footerLink && project.footerLink.length > 0 ? (
          <div className="project-card-footer">
            {project.footerLink.map((link, i) => {
              const hasUrl = link.url && link.url.trim() !== "";
              return (
                <span
                  key={i}
                  className={
                    hasUrl
                      ? isDark
                        ? "project-tag project-tag-clickable"
                        : "project-tag project-tag-clickable"
                      : isDark
                      ? "project-tag project-tag-disabled"
                      : "project-tag project-tag-disabled"
                  }
                  onClick={() => {
                    if (hasUrl) {
                      var win = window.open(link.url, "_blank");
                      win.focus();
                    }
                  }}
                  title={hasUrl ? `Open ${link.name}` : "Link coming soon"}
                >
                  {link.name}
                </span>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
