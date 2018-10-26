import React, { Fragment } from 'react'
import classNames from 'classnames'

const LevelBar = ({ name, visible }) => (
  <div className="skill">
    <h4 className="skill-name">{name}</h4>
    <div className="total-bar">
      <div className={classNames('filled-bar', name, { visible })}>
      </div>
    </div>
  </div>

)

export default LevelBar
