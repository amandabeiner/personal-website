import React, { Component } from 'react';
import ProjectTile from '../components/ProjectTile';
import ScrollableAnchor from 'react-scrollable-anchor';

class PortfolioContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      projects: [],
      slectedProject: null
    }
    this.hoverProject = this.hoverProject.bind(this);
    this.leaveProject = this.leaveProject.bind(this);
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

  hoverProject(id){
    this.setState({ selectedProject: id })
  }

  leaveProject(){
    this.setState({ selectedProject: null })
  }

  render(){
    let projects = this.state.projects.map(project => {
      let onHover = () => {
        this.hoverProject(project.id)
      }

      let name, description;
      if(project.id === this.state.selectedProject){
        name = project.name
        description = project.description
      }

      return(
        <ProjectTile
          project={project}
          name={name}
          description={description}
          handleHover={onHover}
          handleLeave={this.leaveProject}
          key={project.id}
        />
      )
    })
    return(
      <div className="portfolio-section">
        <div className="row">
          <ScrollableAnchor id={'portfolio'}>
            <h2 className='portfolio-header'>Portfolio</h2>
          </ScrollableAnchor>
          <hr></hr>
          {projects}
        </div>
      </div>
    )
  }
}

export default PortfolioContainer;
