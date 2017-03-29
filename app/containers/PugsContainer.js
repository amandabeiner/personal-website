import React, { Component } from 'react';
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


  render(){
    return(
      <Pug
        gif={this.state.gifUrl}
        onClick={this.getNewPugGif}
      />
    )
  }
}

export default PugsContainer;
