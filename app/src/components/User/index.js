import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const User = ({
  name, surname, vacancy, avatar, address, isActive, isHidden,
}) => (
  <>
    <img
      className="avatar"
      src={avatar}
      alt={name}
      title={name}
    />
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
);

export default User;

User.defaultProps = {
  name: '',
  surname: '',
  address: '',
  vacancy: '',
  avatar: '',
  isActive: false,
  isHidden: false,
};

User.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  address: PropTypes.string,
  vacancy: PropTypes.string,
  avatar: PropTypes.string,
  isActive: PropTypes.bool,
  isHidden: PropTypes.bool,
};
