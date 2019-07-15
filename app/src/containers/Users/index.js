import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserList from '../../components/UserList';
import { changeActiveUser } from '../../actions/userAction';

const Users = ({ usersConnect, changeActiveUserConnect }) => {
  const activeUserChanged = (id) => {
    changeActiveUserConnect(id);
  };
  return (
    <UserList
      users={usersConnect}
      activeUserChanged={activeUserChanged}
    />
  );
};

export default connect(state => ({
  usersConnect: state.users.userList,
}), {
  changeActiveUserConnect: changeActiveUser,
})(Users);

Users.propTypes = {
  usersConnect: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeActiveUserConnect: PropTypes.func.isRequired,
};
