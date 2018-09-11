import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const Home = props => {
  return(
      <div className="home">
        <ScrollableAnchor id={'home'}>
          <div className="home-anchor">
          </div>
        </ScrollableAnchor>
        <div className="home-content">
          <div className="home-text">
            <h1 className="name">Hi, {"I'm"} Amanda</h1>
            <hr></hr>
            <p className="bio">
              Software developer, JavaScript enthusiast, full-time admirer of squishy-faced dogs
            </p>
          </div>
        </div>
      </div>
  )
}

export default Home;
