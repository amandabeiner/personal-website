import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import Pug from '../components/Pug';

class PugsContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      gifUrl: {}
    }
    this.getNewPugGif = this.getNewPugGif.bind(this);
  }

  componentDidMount(){
    fetch('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=pug')
    .then(response => {
      let gif = response.json()
      return gif
    }).then(gif => {
      this.setState({
        gifUrl: gif.data.image_original_url
      });
    })
  }

  getNewPugGif(){
    fetch('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=pug')
    .then(response => {
      let gif = response.json()
      return gif
    }).then(gif => {
      this.setState({
        gifUrl: gif.data.image_original_url
      });
    })
  }

  // <ScrollableAnchor id={'pug-section'}>

  render(){
    return(
        <div className='pug-section'>
          <ScrollableAnchor id={'pug-section'}>
            <div>
              <Pug
                gif={this.state.gifUrl}
                onClick={this.getNewPugGif}
              />
            </div>
          </ScrollableAnchor>
        </div>
    )
  }
}

export default PugsContainer;
