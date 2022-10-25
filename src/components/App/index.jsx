import { Component } from 'react';
import { TailSpin } from 'react-loader-spinner';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import styles from 'components/App/style.module.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      query: '',
      isLoading: false,
      total: 0,
      images: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { page, query } = this.state;

    if (prevState.page !== page || prevState.query !== query) {
      this.fetchImages();
    }
  }

  fetchImages() {
    this.setState({ isLoading: true });

    const { query, page } = this.state;

    fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${process.env.REACT_APP_API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(({ total, hits }) => {
        this.setState(({ images }) => ({
          images: [...images, ...hits],
          total,
        }));
      })
      .catch(reason => alert(reason.message))
      .finally(() => this.setState({ isLoading: false }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const value = e.target[1].value;

    this.setState({ images: [] });

    if (!!value?.length) {
      if (this.state.page !== 1) this.setState({ page: 1 });

      return this.setState({ query: value });
    }
  }

  handleLoadMore() {
    this.setState(({ page }) => ({ page: page + 1 }));
  }

  render() {
    const { images, isLoading, total } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSubmit} />

        <ImageGallery images={images} />

        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          radius="1"
          visible={isLoading}
        />

        {!!images.length && total > images.length && (
          <Button onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}
