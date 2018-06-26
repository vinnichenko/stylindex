import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const BookListItem = ({ book }) => {
  return (
    <div className="book-list-item">
      <img src={book.cover} alt={book.name} className="book-list-item-thumb" />
      <h2>{book.name}</h2>
      <h3>By {book.author}</h3>
      <Link to={book.isbn}>More information</Link>
    </div>
  );
};

BookListItem.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string,
    cover: PropTypes.string,
    author: PropTypes.string,
    isbn: PropTypes.string
  }).isRequired
};

export default BookListItem;
