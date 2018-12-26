import React, { Component } from 'react';

import Pug from '../components/Pug';

class PugsContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      gifUrl: {},
      isFetching: false
    }
    this.getNewPugGif = this.getNewPugGif.bind(this);
  }

  componentDidMount(){
    this.fetchNewGif()
      .then(gif => {
        this.setState({
          gifUrl: gif.data.image_original_url
        })
      })
  }

  getNewPugGif() {
    this.setState({
      isFetching: true
    }, () => {
      this.fetchNewGif()
        .then(gif => {
          this.setState({
            isFetching: false,
            gifUrl: gif.data.image_original_url
          })
        })
    })
  }

  fetchNewGif() {
    return fetch('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=pug')
      .then(response => {
        return response.json()
      })
  }

  render(){
    const { isFetching } = this.state
    return(
      <div className='pug-section'>
        { isFetching ? (
          <img src="https://res.cloudinary.com/dpuzgzqir/image/upload/v1545855988/loader_yans1v.gif" />
        ) : (
          <Pug
            gif={this.state.gifUrl}
            onClick={this.getNewPugGif}
          />
        )}
      </div>
    )
  }
}

export default PugsContainer;
