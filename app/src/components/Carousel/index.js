import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Modal from '../Modal';
import User from "../User";
import AddUser from '../AddUser';
import './styles.css';

class Carousel extends Component {
  state = {
    count: 0,
    isOpen: false,
  };

  openModal = () => {
    this.setState({
      isOpen: true
    })
  };

  handleSubmit = () => {
    this.setState({
      isOpen: false
    })
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    })
  };

  handleClick = () => {
    const {getUser, users, clearStore} = this.props;
    const {count} = this.state;
    getUser(users[count].id);
    clearStore();
  };

  addState = (increment, lastSlide) => {
    const {count} = this.state;
    let currentSlide = count;
    if (currentSlide === lastSlide && increment === 1) {
      this.setState({
        count: 0
      });
    } else if (currentSlide === lastSlide && increment === -1) {
      this.setState({
        count: count + increment
      });
    } else if (currentSlide === 0 && increment === -1)
      this.setState({count: lastSlide});
    else if (currentSlide < lastSlide)
      this.setState({count: count + increment});
  };

  render() {
    const {users, activeUserChanged, addUser} = this.props;
    const {count, isOpen} = this.state;
    let isActive = true;
    return (
        <div className="slider-wrapper">
          {users !== undefined ?
              <>
                <button
                    className="slider-prev"
                    onClick={() => this.addState(-1, users.length - 1)}>
                  &#10094;
                </button>
                <div className="slide-wrapper">
                  {users[count] !== undefined ? (
                      <>
                        <div className="slide-info"
                             onClick={() => activeUserChanged(users[count].id)}>
                          <Link onClick={this.handleClick} to={`/${users[count].id}`}>
                            <User
                                isActive={isActive}
                                avatar={users[count].avatar}
                                name={users[count].name}/>
                          </Link>
                        </div>
                      </>
                  ) : null}
                  <button className="btn-modal"
                          onClick={this.openModal}>
                    <i className="fas fa-plus"></i>
                    Добавить пользователя
                  </button>
                  <Modal
                      title={'Добавить пользователя'}
                      isOpen={isOpen}
                      onCancel={this.handleCancel}
                      onSubmit={this.handleSubmit}
                  >
                    <AddUser addUser={addUser}/>
                  </Modal>
                </div>
                <button
                    className="slider-next"
                    onClick={() => this.addState(1, users.length - 1)}>
                  &#10095;
                </button>
              </> : null}
        </div>
    );
  }
}

export default Carousel