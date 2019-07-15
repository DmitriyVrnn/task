import React from 'react';

import Comment from '../Comment';
import './styles.css';

const CommentList = ({comments}) => {
  if (!comments.length) {
    return (
        <p>
          Комментарии отсутствуют
        </p>
    );
  }

  return (
      <ul className="list-comments">
        {comments.map(item => {
          const {title, phone, body} = item;
          if (item !== undefined) {
            return (
                <article className="comment-wrapper"
                         key={item.id}>
                  <li className="comment">
                    <Comment
                        title={title}
                        phone={phone}
                        comment={body}
                    />
                  </li>
                </article>
            )
          }
        })}
      </ul>
  )
};

export default CommentList;