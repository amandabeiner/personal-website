import React from 'react';

const BodyField = props => {
  return(
    <label>
      <textarea
        label={props.label}
        type='text'
        name={props.name}
        onChange={props.handlerFunction}
        value={props.content}
      />
    </label>
  )
}

export default BodyField;
