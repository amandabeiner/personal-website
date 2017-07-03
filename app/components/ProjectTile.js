import React from 'react';

const ProjectTile = props => {
  return(
    <div>
      <h3>{props.project.name}</h3>
      <p>{props.project.description}</p>
    </div>
  )
}

export default ProjectTile;
