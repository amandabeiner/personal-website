import React from 'react';

const ProjectTile = props => {
  return(
    <div className="portfolio-tile small-12 medium-6 columns end" >
      <div className="overlay show-for-medium-up" >
        <img src={props.project.image} onMouseEnter={props.handleHover} onMouseLeave={props.handleLeave} />
        <div className="project-text">
          <h3 className="project-name">{props.name}</h3>
          <p className="project-description">{props.description}</p>
        </div>
      </div>

      <div className="show-for-small-only">
        <h3 className="project-name">{props.project.name}</h3>
        <p className="project-description">{props.project.description}</p>
      </div>

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