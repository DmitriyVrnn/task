import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchAllUsers, changeActiveUser} from "../../actions/userAction";

import UserList from '../../components/UserList';
import UserInfo from '../../components/UserInfo';

class Container extends Component {
  componentDidMount() {
    const {fetchAllUsersConnect} = this.props;
    fetchAllUsersConnect();
  };

  activeUserChanged = (id) => {
    const {changeActiveUserConnect} = this.props;
    changeActiveUserConnect(id);
  };

  render() {
    const {users, activeUser} = this.props;
    return (
        <>
          <UserList users={users}
                    activeUserChanged={this.activeUserChanged}/>
          <UserInfo users={users}
                    activeUser={activeUser}/>
        </>
    )
  }
};
export default connect(state => ({
  users: state.users.userList,
  activeUser: state.users.activeUser
}), {
  fetchAllUsersConnect: fetchAllUsers,
  changeActiveUserConnect: changeActiveUser
})(Container)