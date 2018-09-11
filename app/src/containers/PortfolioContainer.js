import React, { Component } from 'react';
import ProjectTile from '../components/ProjectTile';
import ScrollableAnchor from 'react-scrollable-anchor';

class PortfolioContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      projects: [],
      selectedProject: {}
    }
    this.hoverProject = this.hoverProject.bind(this);
    this.leaveProject = this.leaveProject.bind(this);
  }

  componentDidMount(){
    fetch('/api/v1/projects')
      .then(response => {
        let projects = response.json()
        return projects
      })
      .then(projects => {
        this.setState({ projects: projects, selectedProject: projects[0] })
      })
  }

  hoverProject(id){
    this.setState({ selectedProject: id })
  }

  leaveProject(){
    this.setState({ selectedProject: null })
  }

  render(){
    const { selectedProject } = this.state
    console.log(selectedProject)

    return (
      <div className="portfolio-section">
        <div className="carousel">
          <div className="carousel-arrow arrow-left">
            <i className="fa fa-chevron-left"></i>
          </div>
          <div className="carousel-body">
            <div className="image-container">
              <img src={selectedProject.image} />
            </div>
            <div className="project-info">
              <h3 className="project-name">{selectedProject.name}</h3>
              <p className="project-description">{selectedProject.description}</p>
              <div className="project-links">
                <a href={selectedProject.github_link} target="_blank">
                  <i className="fa fa-github" alt="View on Github"></i>
                </a>
                {selectedProject.web_link && (
                  <a href={selectedProject.web_link} target="_blank">
                    <i className="fa fa-globe" alt="View website"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="carousel-arrow arrow-right">
            <i className="fa fa-chevron-right"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioContainer;
