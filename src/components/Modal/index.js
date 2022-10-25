import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from 'components/Modal/style.module.css';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.props.onClose();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { src, onClose } = this.props;

    return (
      <div className={styles.Overlay} onClick={onClose}>
        <div className={styles.Modal}>
          <img src={src} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;
