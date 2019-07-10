import React, {Component} from 'react';
import {connect} from 'react-redux';

import UserList from '../../components/UserList';
import {fetchAllUsers} from "../../actions/userAction";

class UserContainer extends Component {

  componentDidMount() {
    const {fetchAllUsersConnect} = this.props;
    fetchAllUsersConnect();
  }

  render() {
    const {users} = this.props;
    return (
        <UserList users={users}/>
    )
  }
};
export default connect(state => ({
  users: state.users.userList
}), {
  fetchAllUsersConnect: fetchAllUsers
})(UserContainer);