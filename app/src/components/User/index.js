import React from 'react';

const User = ({user: {name, surname, id, vacancy}, activeUserChanged}) => {
  return(
      <div onClick={() => activeUserChanged(id)}>
        <span>{name}</span>
        <span>{surname}</span>
        <span>{vacancy}</span>
      </div>
  )
};

export default User;