import React, { Component } from 'react';

class PortfolioContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      projects: []
    }
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
