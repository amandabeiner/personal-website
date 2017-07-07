import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const Home = props => {
  return(
      <div className="home">
        <ScrollableAnchor id={'home'}>
          <div className="home-anchor">
          </div>
        </ScrollableAnchor>
          <div className="image-wrapper">
            <img className="profile-photo" src="https://avatars1.githubusercontent.com/u/21161427?v=3&s=460" />
          </div>
        <div className="home-text">
          <h1 className="name">Amanda Beiner</h1>
          <hr></hr>
          <p className="bio">A Boston-based software developer, amateur yogi, and full-time admirer of squishy-faced dogs</p>
        </div>
      </div>
  )
}

export default Home;
