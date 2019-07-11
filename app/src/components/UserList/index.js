import React from 'react'

import User from '../User'

const UserList = ({users, activeUserChanged}) => {
  if(!users.length){
    return(
        <p>
          Пользователи отсутствуют
        </p>
    );
  }

  return(
      <div>
        {users.map(user => (
            <User
              key={user.id}
              user={user}
              activeUserChanged={activeUserChanged}
            />
        ))}
      </div>
  )
};

export default UserList;