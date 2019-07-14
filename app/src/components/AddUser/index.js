import React from 'react';

export default class AddUser extends React.Component {
  state = {
    name: ''
  }

  handleInputChange = (e) => {
    this.setState({
      name: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {name} = this.state;
    const {addUser} = this.props;
    addUser({name});
    this.setState({
      name: ''
    })
  };

  render() {
    const {name} = this.state;
    return (
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 value={name}
                 onChange={this.handleInputChange}
                 required/>
          <button type="submit">Добавить пользователя в стейт</button>
        </form>
    )
  }
}