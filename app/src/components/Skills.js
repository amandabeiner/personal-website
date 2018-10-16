import React from 'react'
import PropTypes from 'prop-types'
import LevelBar from './LevelBar'

const Skills = (props) => {
  //cache
  return ( 
    <div className="skills-section">
      <LevelBar
        width={80}
        name="JavaScript"
      />
      <LevelBar
        width={80}
        name="HTML5"
      />
      <LevelBar
        width={80}
        name="CSS3"
      />
      <LevelBar
        width={80}
        name="React"
      />
      <LevelBar
        width={80}
        name="Ruby"
      />
      <LevelBar
        width={80}
        name="Rails"
      />
    </div>
  )
}

export default Skills
