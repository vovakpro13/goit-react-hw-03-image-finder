import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from 'components/Button/style.module.css';

class Button extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <button className={styles.Button} onClick={onClick}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
