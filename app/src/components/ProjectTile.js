import React from 'react';


const ProjectTile = props => {
  let web_link;
  if(props.project.web_link){
    web_link = <a href={props.project.web_link} target="_blank">
      <i className="fa fa-globe" aria-hidden="true"></i>
    </a>
  }
  return(
    <div className="portfolio-tile small-12 medium-6 columns" >
      <div className="overlay hide-for-small-only">
        <img onMouseEnter={props.handleHover} onMouseLeave={props.handleLeave} src={props.project.image}  />

        <div className="project-text">
          <h3 className="project-name">{props.name}</h3>
          <p className="project-description">{props.description}</p>
        </div>
      </div>

      <div className="show-for-small-only">
        <img onMouseEnter={props.handleHover} onMouseLeave={props.handleLeave} src={props.project.image}  />

        <div className="project-text">
          <h3 className="project-name">{props.project.name}</h3>
          <p className="project-description">{props.project.description}</p>
        </div>
      </div>

      <div className="icons">
        <a href={props.project.github_link} target="_blank">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        {web_link}
      </div>
    </div>
  )
}

export default ProjectTile;
