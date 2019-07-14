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
    return (
        <div className="Slider-wrapper">
          {users !== undefined ?
              <>
                <button
                    className="Slider-prev"
                    onClick={() => this.addState(-1, users.length - 1)}>
                  &#10094;
                </button>
                <div className="Slide-wrapper">
                  <h2 className="Slide-title">
                    {users[count] !== undefined ? (
                        <>
                          <Link onClick={this.handleClick} to={`/${users[count].id}`}>
                            <div onClick={() => activeUserChanged(users[count].id)}>
                              <User avatar={users[count].avatar}
                                    name={users[count].name}/>
                            </div>
                          </Link>
                        </>
                    ) : null}
                  </h2>
                  <button onClick={this.openModal}>Добавить</button>
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
                    className="Slider-next"
                    onClick={() => this.addState(1, users.length - 1)}>
                  &#10095;
                </button>
              </> : null}
        </div>
    );
  }
}

export default Carousel