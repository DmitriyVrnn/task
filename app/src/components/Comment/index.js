import React from 'react';

const Comment = ({comment, title, phone}) => {
  return (
      <>
        <h2>{title}</h2>
        <h3>{comment}</h3>
        <span>{phone}</span>
      </>
  )
};

export default Comment;