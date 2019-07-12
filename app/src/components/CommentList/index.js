import React from 'react';

import Comment from '../Comment'

const CommentList = ({comments}) => {
  if (!comments.length) {
    return (
        <p>
          Комментарии отсутствуют
        </p>
    );
  }

  return (
      <ul>
        {comments.map(item => {
          return (
              <li key={item.id}>
                <Comment
                    comment={item.comment}
                />
              </li>
          )
        })}
      </ul>
  )
};

export default CommentList;