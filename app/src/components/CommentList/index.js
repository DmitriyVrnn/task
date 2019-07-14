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
          if (item !== undefined) {
            return (
                <li key={item.id}>
                  <Comment
                      title={item.title}
                      phone={item.phone}
                      comment={item.body}
                  />
                </li>
            )
          }
        })}
      </ul>
  )
};

export default CommentList;