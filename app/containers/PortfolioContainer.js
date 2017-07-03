import React, { Component } from 'react';

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
    return(
      <div>
        Dope Projects
      </div>
    )
  }
}

export default PortfolioContainer;
