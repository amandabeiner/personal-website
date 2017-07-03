import React, { Component } from 'react';
import ProjectTile from '../components/ProjectTile';

class PortfolioContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      projects: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/projects')
    .then(response => {
      let projects = response.json()
      return projects
    }).then(projects => {
      this.setState({ projects: projects })
    })
  }

  render(){
    let projects = this.state.projects.map(project => {
      return(
        <ProjectTile
          project={project}
          key={project.id}
        />
      )
    })
    return(
      <div>
        {projects}
      </div>
    )
  }
}

export default PortfolioContainer;
