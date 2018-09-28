import React from 'react'

const ProjectTile = ({ project }) => {
  return ( 
    <div className="project-tile">
      <div className="image-container">
        <img src={project.image} />
      </div>
      <div className="project-info">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          <a href={project.github_link} target="_blank">
            <i className="fa fa-github" alt="View on Github"></i>
          </a>
          {project.web_link && (
            <a href={project.web_link} target="_blank">
              <i className="fa fa-globe" alt="View website"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectTile
