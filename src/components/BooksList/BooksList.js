import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import BookListItem from '../BookListItem/BookListItem';

@inject('booksStore') @observer
class BooksList extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.booksStore;
  }

  componentDidMount() {
    this.store.getBooks();
  }

  render() {
    return (
      <div className="books-list">
        {this.store.books.map(book => <BookListItem key={book.isbn} book={book} />)}
      </div>
    )
  }
}

BooksList.wrappedComponent.propTypes = {
  booksStore: PropTypes.shape({
    books: PropTypes.array
  }).isRequired
};

export default BooksList;
