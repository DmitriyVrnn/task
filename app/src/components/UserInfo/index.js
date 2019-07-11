import React, {Component} from 'react';
import User from '../User'

class UserInfo extends Component {
  render() {
    const {users, activeUser} = this.props;
    return (
        <div>
          {users.map(item => {
            if (item.id === activeUser) {
              return (
                  <div key={item.id}>
                    <User user={item}/>
                    <span>{item.address}</span>
                  </div>
              )
            } else {
              return null
            }
          })}
        </div>
    )
  }
};

export default UserInfo