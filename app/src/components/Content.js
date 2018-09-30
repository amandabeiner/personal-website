import React from 'react'
import Home from './Home'
import ContactFormContainer from '../containers/ContactFormContainer'
import PugsContainer from '../containers/PugsContainer'
import PortfolioContainer from '../containers/PortfolioContainer'
import Skills from '../components/Skills'

const Content = props => {
  return(
    <div>
      <Home />
      <PortfolioContainer />
      <Skills />
      <ContactFormContainer />
      <PugsContainer />
    </div>
  )
}

export default Content;
