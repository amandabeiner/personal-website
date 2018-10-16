import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const LevelBar = (props) => {
  return (
    <div className="skill">
      <h4 className="skill-name">{props.name}</h4>
      <div className="total-bar">
        <div className={`filled-bar ${props.name}`}>
        </div>
      </div>
    </div>
  )
}

export default LevelBar
