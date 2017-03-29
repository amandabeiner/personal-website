import React from 'react';

const Pug = props => {
  return(
    <div>
      <img src={props.gif} />
      <button onClick={props.onClick}>Next Pug</button>
    </div>
  );
}

export default Pug;
