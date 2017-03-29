import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ContactFormContainer from './containers/ContactFormContainer';
import PugsContainer from './containers/PugsContainer';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <Router history={browserHistory}>
        <Route path='/' component={Navbar}>
          <IndexRoute component={Home} />
          <Route path='/contact' component={ContactFormContainer} />
          <Route path='/pugs' component={PugsContainer} />
        </Route>
      </Router>
    )
  }
}

export default App;
