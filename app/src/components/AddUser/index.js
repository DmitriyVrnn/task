import React from 'react';

import './styles.css';

export default class AddUser extends React.Component {
  state = {
    name: ''
  };

  handleInputChange = (e) => {
    this.setState({
      name: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {name} = this.state;
    const {addUser, onSubmit} = this.props;
    addUser({name});
    this.setState({
      name: ''
    });
    onSubmit()
  };

  render() {
    const {name} = this.state;
    return (
        <form onSubmit={this.handleSubmit}
              className="modal-form">
          <input type="text"
                 className="input-name"
                 placeholder="Имя"
                 value={name}
                 onChange={this.handleInputChange}
                 required/>
          <button
              className="btn-modal-submit"
              type="submit">
            Добавить
          </button>
        </form>
    )
  }
}