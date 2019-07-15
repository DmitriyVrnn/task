import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment, title, phone }) => (
  <>
    <h2 className="title">{title}</h2>
    <p className="body">{comment}</p>
    <span className="phone">{phone}</span>
  </>
);

export default Comment;

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
