import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import './styles.css'

const Modal = ({title, isOpen, onCancel, children, onSubmit}) => (
    <>
      {isOpen && (
          <Portal>
            <div className="modalOverlay">
              <div className="modalWindow">
                <div className="modalHeader">
                  <div className="modalTitle">{title}</div>
                </div>
                <div className="modalBody">
                  {children}
                </div>
                <div className="modalFooter">
                  <button onClick={onCancel}>Cancel</button>
                  <button onClick={onSubmit}>Submit</button>
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
