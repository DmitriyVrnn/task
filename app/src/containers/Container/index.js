import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllUsers} from "../../actions/userAction";
import {Route, Switch} from 'react-router';
import UserContainer from '../UserContainer';
import UserInfo from '../../components/UserInfo';

class Container extends Component {
  componentDidMount() {
    const {fetchAllUsersConnect} = this.props;
    fetchAllUsersConnect();
  };

  render() {
    const {users, activeUser} = this.props;
    return (
        <Switch>
          <Route path="/" component={UserContainer} exact/>
          <Route path="/:id" render={({match}) => {
            const {id} = match.params;
            return (<UserInfo users={users}
                              activeUser={activeUser}
                              itemId={id}/>)
          }}/>
        </Switch>
    )
  }
}
export default connect(state => ({
  users: state.users.userList,
  activeUser: state.users.activeUser
}), {
  fetchAllUsersConnect: fetchAllUsers,
})(Container)