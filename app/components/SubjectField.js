import React from 'react';

const SubjectField = props => {
  return(
    <label>{props.label}
      <input
        name={props.name}
        type='text'
        onChange={props.handlerFunction}
        value={props.content}
      />
    </label>
  )
}

export default SubjectField;
