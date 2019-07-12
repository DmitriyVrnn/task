import React, {Component} from 'react';

import User from '../User'
import {API} from "../../constants";

class UserInfo extends Component {
  state = {
    user: ''
  };

  componentDidMount() {
    const { itemId} = this.props;
    fetch(`${API}/users/${itemId}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          this.setState({
            user: data
          })
        })
  }

  render() {
    const {users, activeUser} = this.props;
    const {user} = this.state;
    const {name, vacancy} = user;
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
          <span>{name}</span>
          <span>{vacancy}</span>
        </div>
    )
  }
};

export default UserInfo