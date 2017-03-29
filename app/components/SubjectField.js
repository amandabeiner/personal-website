import React from 'react';

const SubjectField = props => {
  return(
    <label>{props.label}
      <input
        name={props.name}
        type='text'
        onChange={props.handlerFunction}
      />
    </label>
  )
}

export default SubjectField;
