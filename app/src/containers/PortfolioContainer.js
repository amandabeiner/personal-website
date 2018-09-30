import React, { Component, Fragment } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import ProjectTile from '../components/ProjectTile'

class PortfolioContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      projects: [],
      selectedProject: {},
      slideFrom: 'right'
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
      this.setState({
        selectedProject: this.state.projects[index + 1],
        slideFrom: 'right'
      })
    }
  }

  onClickPreviousProject() {
    const index = this.getCurrentIndex()

    if(this.validatePreviousProject()) {
      this.setState({
        selectedProject: this.state.projects[index - 1],
        slideFrom: 'left'
      })
    }
  }

  goToProject(project) {
    const targetIndex = this.state.projects.indexOf(project)
    this.setState({
      slideFrom: targetIndex > this.getCurrentIndex() ? 'right' : 'left',
      selectedProject: project
    })
  }

  transitionWrapper({ children }) {
    return(
      <div style={{ display: 'flex', flexBasis: '90%', overflow: 'hidden' }}>
        {children}
      </div>
    )
  }

  render(){
    const { selectedProject, slideFrom } = this.state

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
          <TransitionGroup
            component={this.transitionWrapper}
            childFactory={(child) => {
              return React.cloneElement(child, { classNames: `slide-from-${slideFrom}` })
            }}
          >
            <CSSTransition
              key={selectedProject.id}
              classNames={`slide-from-${slideFrom}`}
              timeout={300}
              mountOnEnter
              unmountOnExit
            >
              <ProjectTile
                project={selectedProject}
              />
            </CSSTransition>
          </TransitionGroup>
          <div className="carousel-arrow arrow-right">
            {this.validateNextProject() && (
              <i
                className="fa fa-chevron-right"
                onClick={this.onClickNextProject}
              ></i>
            )}
          </div>
        </div>
        <div className="progress-bar">
          <div className="circles">
            {this.state.projects.map(p => {
              const selected = p.id === this.state.selectedProject.id ? 'fa-circle' : 'fa-circle-thin'
              return <i className={`fa ${selected}`} key={p.id} onClick={() => this.goToProject(p)}></i>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioContainer;
