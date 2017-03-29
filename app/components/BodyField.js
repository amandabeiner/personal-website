import React from 'react';

const BodyField = props => {
  return(
    <label>
      <textarea
        label={props.label}
        type='text'
        name={props.name}
        onChange={props.handlerFunction}
      />
    </label>
  )
}

export default BodyField;
