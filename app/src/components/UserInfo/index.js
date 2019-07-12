import React, {Component} from 'react';

class UserInfo extends Component {
  componentDidMount() {
    const {itemId, getUser} = this.props;
    getUser(itemId);
  }

  render() {
    const {user} = this.props;
    const {name, surname, address, vacancy} = user;
    return (
        <div>
          <span>{name}</span>
          <span>{surname}</span>
          <span>{vacancy}</span>
          <span>{address}</span>
        </div>
    )
  }
};

export default UserInfo