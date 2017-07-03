import React from 'react';

const ProjectTile = props => {
  return(
    <div className="portfolio-tile small-12 medium-6 columns end">
      <img src={props.project.image} />
      <h3 className="project-name">{props.project.name}</h3>
      <p className="project-description">{props.project.description}</p>

      <div className="icons">
        <a href={props.project.github_link} target="_blank">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href={props.project.web_link} target="_blank">
          <i className="fa fa-globe" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  )
}

export default ProjectTile;
