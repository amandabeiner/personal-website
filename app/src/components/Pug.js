import React, { Fragment } from 'react';

const Pug = props => (
  <Fragment>
    <img src={props.gif} />
    <button onClick={props.onClick}>fetch!</button>
  </Fragment>
)

export default Pug
