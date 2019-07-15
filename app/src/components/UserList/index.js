import React from 'react'
import {Link} from 'react-router-dom';

import './styles.css';
import User from '../User'

const UserList = ({users, activeUserChanged}) => {
  if (!users.length) {
    return (
        <p className="users-empty">
          Пользователи отсутствуют
        </p>
    );
  }

  return (
      <section className="list">
        <ul className="list-users">
          <h1 className="list-title">Список сотрудников</h1>
          {users.map(user => {
            const {name, surname, vacancy, avatar, id} = user;
            return (
                <Link key={id}
                      to={`${id}`}>
                  <li className="list-item"
                      onClick={() => activeUserChanged(id)}>
                    <User
                        name={name}
                        surname={surname}
                        vacancy={vacancy}
                        avatar={avatar}
                        isHidden={true}
                    />
                  </li>
                </Link>
            )
          })}
        </ul>
      </section>
  )
};

export default UserList;