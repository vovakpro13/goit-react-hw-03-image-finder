import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from 'components/Searchbar/style.module.css';

class Searchbar extends Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={onSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
