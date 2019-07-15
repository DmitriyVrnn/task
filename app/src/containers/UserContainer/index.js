import React from 'react';
import {connect} from 'react-redux';

import UserList from '../../components/UserList';
import {changeActiveUser} from "../../actions/userAction";

const UserContainer = ({users, changeActiveUserConnect}) => {
  const activeUserChanged = (id) => {
    changeActiveUserConnect(id);
  };
  return (
      <UserList users={users}
                activeUserChanged={activeUserChanged}/>
  )
};

export default connect(state => ({
  users: state.users.userList,
}), {
  changeActiveUserConnect: changeActiveUser
})(UserContainer);