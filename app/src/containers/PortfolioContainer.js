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

    this.onClickNextProject     = this.onClickNextProject.bind(this)
    this.onClickPreviousProject = this.onClickPreviousProject.bind(this)
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

  getCurrentIndex() {
    const { projects, selectedProject } = this.state
    return projects.indexOf(selectedProject) 
  }

  validateNextProject() {
    return this.getCurrentIndex() + 1  < this.state.projects.length
  }

  validatePreviousProject() {
    return this.getCurrentIndex() - 1 >= 0
  }

  onClickNextProject() {
    const index = this.getCurrentIndex()

    if (this.validateNextProject()) {
      this.setState({ selectedProject: this.state.projects[index + 1]})
    }
  }

  onClickPreviousProject() {
    const index = this.getCurrentIndex()

    if(this.validatePreviousProject()) {
      this.setState({ selectedProject: this.state.projects[index - 1]})
    }
  }

  render(){
    const { selectedProject } = this.state

    return (
      <div className="portfolio-section">
        <div className="carousel">
          <div className="carousel-arrow arrow-left">
            {this.validatePreviousProject() && (
              <i
                className="fa fa-chevron-left"
                onClick={this.onClickPreviousProject}
              ></i>
            )}
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
            {this.validateNextProject() && (
              <i
                className="fa fa-chevron-right"
                onClick={this.onClickNextProject}
              ></i>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioContainer;
