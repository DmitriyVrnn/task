import React from 'react'
import {Link} from 'react-router-dom';

import User from '../User'

const UserList = ({users, activeUserChanged}) => {
  if (!users.length) {
    return (
        <p>
          Пользователи отсутствуют
        </p>
    );
  }

  return (
      <ul>
        {users.map(user => (
            <li key={user.id}>
              <Link to={`${user.id}`}>
                <User
                    key={user.id}
                    user={user}
                    activeUserChanged={activeUserChanged}
                />
              </Link>
            </li>
        ))}
      </ul>
  )
};

export default UserList;