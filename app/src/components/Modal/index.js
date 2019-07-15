import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import './styles.css'

const Modal = ({title, isOpen, onCancel, children}) => (
    <>
      {isOpen && (
          <Portal>
            <div className="modal-overlay">
              <div className="modal-window">
                <div className="modal-header">
                  <div className="modal-title">{title}</div>
                </div>
                <div className="modal-body">
                  {children}
                </div>
                <div className="modal-footer">
                  <button onClick={onCancel}><i className="fas fa-times-circle"></i></button>
                </div>
              </div>
            </div>
          </Portal>
      )
      }
    </>
);

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  children: PropTypes.node,
};

Modal.defaultProps = {
  title: 'Modal window',
  isOpen: false,
  onCancel: () => {
  },
  children: null,
};

export default Modal;
