import React from 'react';
import {connect} from 'react-redux';

import UserList from '../../components/UserList';
import {changeActiveUser} from "../../actions/userAction";

class UserContainer extends React.Component {
  render() {
    const {users, activeUserChanged} = this.props;
    return (
        <UserList users={users}
                  activeUserChanged={activeUserChanged}/>
    )
  }
}

export default connect(state => ({
  users: state.users.userList,
}), {
  changeActiveUserConnect: changeActiveUser
})(UserContainer);

/*const UserContainer = ({users, changeActiveUserConnect, history}) => {
  const activeUserChanged = (id) => {
    changeActiveUserConnect(id);
    history.push(id);
    console.log(history)
  };

  return (
      <UserList users={users}
                activeUserChanged={activeUserChanged}/>
  )
};

export default withRouter(connect(state => ({
  users: state.users.userList,
}), {
  changeActiveUserConnect: changeActiveUser
})(UserContainer));*/