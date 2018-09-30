import React from 'react'
import PropTypes from 'prop-types'

const LevelBar = (props) => {
  //cache
  return (
    <div className="total-bar">
      <div className="filled-bar"
        style={{ width: `${props.width}%` }}
      >
      </div>
    </div>
  )
}

export default LevelBar
