import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Modal from '../Modal';
import User from '../User';
import AddUser from '../AddUser';

import './styles.css';

const Carousel = ({
  users, activeUserChanged, addUser, getUser, clearStore,
}) => {
  const [count, setCount] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const isActive = true;

  const openModal = () => {
    setOpen(true);
  };

  const handleSubmit = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleClick = () => {
    getUser(users[count].id);
    clearStore();
  };

  const moveSlide = (increment, lastSlide) => {
    const currentSlide = count;
    if (currentSlide === lastSlide && increment === 1) {
      setCount(0);
    } else if (currentSlide === lastSlide && increment === -1) {
      setCount(count + increment);
    } else if (currentSlide === 0 && increment === -1) setCount(lastSlide);
    else if (currentSlide < lastSlide) setCount(count + increment);
  };

  return (
    <div className="slider-wrapper">
      {users !== undefined
        ? (
          <>
            <button
              type="button"
              className="slider-prev"
              onClick={() => moveSlide(-1, users.length - 1)}
            >
                &#10094;
            </button>
            <div className="slide-wrapper">
              {users[count] !== undefined ? (
                <>
                  <div
                    className="slide-info"
                    onClick={() => activeUserChanged(users[count].id)}
                  >
                    <Link onClick={handleClick} to={`/${users[count].id}`}>
                      <User
                        isActive={isActive}
                        avatar={users[count].avatar}
                        name={users[count].name}
                      />
                    </Link>
                  </div>
                </>
              ) : null}
              <button
                type="button"
                className="btn-modal"
                onClick={openModal}
              >
                <i className="fas fa-plus" />
                  Добавить пользователя
              </button>
              <Modal
                title="Добавить пользователя"
                isOpen={isOpen}
                onCancel={handleCancel}
              >
                <AddUser
                  addUser={addUser}
                  onSubmit={handleSubmit}
                />
              </Modal>
            </div>
            <button
              type="button"
              className="slider-next"
              onClick={() => moveSlide(1, users.length - 1)}
            >
                &#10095;
            </button>
          </>
        ) : null}
    </div>
  );
};

export default Carousel;

Carousel.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeUserChanged: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  clearStore: PropTypes.func.isRequired,
};
