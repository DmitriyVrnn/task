import React from 'react';

import Comment from '../Comment'

const NewComments = ({newComment}) => {
  return (
      <ul>
        {newComment.map(item => (
            <li key={item.id}>
              <Comment title={item.title}
                       comment={item.body}
                       phone={item.phone}/>
            </li>
        ))}
      </ul>
  )
};

export default NewComments;