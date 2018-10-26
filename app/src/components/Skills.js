import React, { Component } from 'react'
import _ from 'lodash'
import LevelBar from './LevelBar'

class Skills extends Component {
  constructor(props) {
    super(props)
    this.state = {
      skillsLocation: null
    }

    this.determineVisibility = _.debounce(this.determineVisibility.bind(this), 250)
  }

  componentDidMount() {
    this.setState({ skillsLocation: this.getPosition() })

    global.document.addEventListener('scroll', this.determineVisibility)
  }

  componentWillUnmount() {
    global.document.removeEventListener('scroll', this.determineVisibility)
  }

  determineVisibility() {
    const scrollPosition = global.window.scrollY
    const skillsPosition = this.getPosition()

    if (scrollPosition >= skillsPosition - 300) {
      this.setState({ skillsVisible: true })
    }
  }

  getPosition() {
    let y = 0
    let element = this.skillsContainer

    while(element) {
      y += element.offsetTop
      element = element.offsetParent
    }

    return y
  }

  render() {
    console.log(this.state.skillsVisible)
    return ( 
      <div className="skills-section" ref={(sc) => { this.skillsContainer = sc }}>
        <LevelBar
          width={80}
          name="JavaScript"
          visible={this.state.skillsVisible}
        />
        <LevelBar
          width={80}
          name="HTML5"
          visible={this.state.skillsVisible}
        />
        <LevelBar
          width={80}
          name="CSS3"
          visible={this.state.skillsVisible}
        />
        <LevelBar
          width={80}
          name="React"
          visible={this.state.skillsVisible}
        />
        <LevelBar
          width={80}
          name="Ruby"
          visible={this.state.skillsVisible}
        />
        <LevelBar
          width={80}
          name="Rails"
          visible={this.state.skillsVisible}
        />
      </div>
    )
  }
}

export default Skills
