import React from 'react';
import {connect} from 'react-redux';

import UserList from '../../components/UserList';
import {changeActiveUser} from "../../actions/userAction";

const Users = ({usersConnect, changeActiveUserConnect}) => {
  const activeUserChanged = (id) => {
    changeActiveUserConnect(id);
  };
  return (
      <UserList users={usersConnect}
                activeUserChanged={activeUserChanged}/>
  )
};

export default connect(state => ({
  usersConnect: state.users.userList,
}), {
  changeActiveUserConnect: changeActiveUser
})(Users);