import React from 'react';
import Home from './Home';
import ContactFormContainer from '../containers/ContactFormContainer';
import PugsContainer from '../containers/PugsContainer';
import PortfolioContainer from '../containers/PortfolioContainer';

const Content = props => {
  return(
    <div>
      <Home />
      <PortfolioContainer />
      <ContactFormContainer />
      <PugsContainer />
    </div>
  )
}

export default Content;
