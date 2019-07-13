import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchAllUsers, getUser, changeActiveUser} from "../../actions/userAction";
import {Route, Switch} from 'react-router';
import UserContainer from '../UserContainer';
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
    const {user, getUserConnect, users} = this.props;
    return (
        <Switch>
          <Route path="/" render={() => {
            return <UserContainer
                activeUserChanged={this.activeUserChanged}/>
          }} exact/>
          <Route path="/:id" render={({match}) => {
            const {id} = match.params;
            return (<UserInfo
                activeUserChanged={this.activeUserChanged}
                users={users}
                user={user}
                itemId={id}
                getUser={getUserConnect}/>)
          }}/>
        </Switch>
    )
  }
}

export default connect(state => ({
  users: state.users.userList,
  activeUser: state.users.activeUser,
  user: state.users.user
}), {
  fetchAllUsersConnect: fetchAllUsers,
  getUserConnect: getUser,
  changeActiveUserConnect: changeActiveUser
})(Container)