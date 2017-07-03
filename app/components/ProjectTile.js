import React from 'react';

const ProjectTile = props => {
  return(
    <div className="portfolio-tile small-12 medium-6 columns end">
      <img src={props.project.image} />
      <h3 className="project-name">{props.project.name}</h3>
      <p className="project-description">{props.project.description}</p>

      <div className="icons">
        <i className="fa fa-github" aria-hidden="true"></i>

        <i className="fa fa-globe" aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default ProjectTile;
