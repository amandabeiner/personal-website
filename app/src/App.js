import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Content from './components/Content'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <Navbar />
        <Content />
      </div>
    )
  }
}

export default App;
