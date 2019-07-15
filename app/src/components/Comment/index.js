import React from 'react';

const Comment = ({comment, title, phone}) => {
  return (
      <>
        <h2 className="title">{title}</h2>
        <p className="body">{comment}</p>
        <span className="phone">{phone}</span>
      </>
  )
};

export default Comment;