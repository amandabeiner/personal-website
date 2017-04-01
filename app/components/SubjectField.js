import React from 'react';

const SubjectField = props => {
  return(
    <input
      name={props.name}
      type='text'
      onChange={props.handlerFunction}
      value={props.content}
      placeholder={props.placeholder}
    />
  )
}

export default SubjectField;
