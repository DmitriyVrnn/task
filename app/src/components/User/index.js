import React from 'react';

const User = ({name, surname, id, vacancy, avatar, address, activeUserChanged}) => {
  return(
      <div onClick={() => activeUserChanged(id)}>
        <img src={avatar} alt={name} title={name}/>
        <p>{name}</p>
        <p>{surname}</p>
        <p>{vacancy}</p>
        <p>{address}</p>
      </div>
  )
};

export default User;