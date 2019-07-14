import React from 'react';

const User = ({user: {name, surname, id, vacancy, avatar}, activeUserChanged}) => {
  return(
      <div onClick={() => activeUserChanged(id)}>
        <img src={avatar} alt={name} title={name}/>
        <span>{name}</span>
        <span>{surname}</span>
        <span>{vacancy}</span>
      </div>
  )
};

export default User;