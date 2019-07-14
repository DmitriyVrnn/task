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
        {users.map(user => {
          const {name, surname, vacancy, avatar, id} = user;
          return (
              <li key={id}>
                <Link to={`${id}`}>
                  <User
                      name={name}
                      surname={surname}
                      vacancy={vacancy}
                      avatar={avatar}
                      activeUserChanged={activeUserChanged}
                  />
                </Link>
              </li>
          )
        })}
      </ul>
  )
};

export default UserList;