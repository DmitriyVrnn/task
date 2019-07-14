import React from 'react';

const User = ({name, surname, id, vacancy, avatar, address}) => {
  return(
     <>
        <img src={avatar} alt={name} title={name}/>
        <p>{name}</p>
        <p>{surname}</p>
        <p>{vacancy}</p>
        <p>{address}</p>
      </>
  )
};

export default User;