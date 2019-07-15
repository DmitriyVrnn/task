import React from 'react';
import "./styles.css"

const User = ({name, surname, id, vacancy, avatar, address, isActive, isHidden}) => {
  return (
      <>
        <img className="avatar"
             src={avatar} alt={name}
             title={name}/>
        <div className="user-data">
          <p className="info name">
            <span className={isActive ? 'hidden' : 'label'}>Имя:</span>
            {name}
          </p>
          <p className="info surname">
            <span className={isActive ? 'hidden' : 'label'}>Фамилия:</span>
            {surname}
          </p>
          <p className="info vacancy">
            <span className={isActive ? 'hidden' : 'label'}>Должность:</span>
            {vacancy}
          </p>
          <p className="info address">
            <span className={isActive || isHidden ? 'hidden' : 'label'}>Адрес:</span>
            {address}
          </p>
        </div>
      </>
  )
};

export default User;