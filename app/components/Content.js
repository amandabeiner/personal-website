import React from 'react';
import Home from './Home';
import ContactFormContainer from '../containers/ContactFormContainer';
import PugsContainer from '../containers/PugsContainer';

const Content = props => {
  return(
    <div>
      <Home />
      <ContactFormContainer />
      <PugsContainer />
    </div>
  )
}

export default Content;
