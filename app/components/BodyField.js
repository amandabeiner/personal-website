import React from 'react';

const BodyField = props => {
  return(
    <textarea
      label={props.label}
      type='text'
      name={props.name}
      onChange={props.handlerFunction}
      value={props.content}
      placeholder={props.placeholder}
    />
  )
}

export default BodyField;
