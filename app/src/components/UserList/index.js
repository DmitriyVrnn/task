import React from 'react'

import User from '../User'

const UserList = ({users}) => {
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
            />
        ))}
      </div>
  )
};

export default UserList;