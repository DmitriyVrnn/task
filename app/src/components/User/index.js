import React from 'react';

const User = ({user: {name, surname}}) => {
  return(
      <div>
        <span>{name}</span>
        <span>{surname}</span>
      </div>
  )
};

export default User;