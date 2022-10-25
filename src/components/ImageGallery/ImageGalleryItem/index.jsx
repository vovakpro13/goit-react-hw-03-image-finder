import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from 'components/ImageGallery/ImageGalleryItem/style.module.css';
import Modal from 'components/Modal';

class ImageGalleryItem extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ isOpen: true });
  }

  handleClose() {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;
    const { webformatURL, largeImageURL } = this.props;

    return (
      <>
        {!!isOpen && <Modal src={largeImageURL} onClose={this.handleClose} />}

        <li className={styles.ImageGalleryItem}>
          <img
            src={webformatURL}
            alt="result of search"
            className={styles.ImageGalleryItemImage}
            onClick={this.handleOpen}
          />
        </li>
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
};

export default ImageGalleryItem;
