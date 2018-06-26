import React from 'react';
import { inject, observer } from 'mobx-react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import BackLink from '../BackLink/BackLink';
import NotFound from '../NotFound/NotFound';

const BookPage = inject('booksStore')(observer((props) => {
  const book = props.booksStore.books.find(book => book.isbn === props.params.id);
  const sameAuthorBooks = [];
  props.booksStore.books.forEach(item => {
    if (item.author === book.author) sameAuthorBooks.push(item)
  });
  if (book) {
    return (
      <React.Fragment>
        <header className="App-header">
          <h1 className="App-title">{book.name}</h1>
        </header>
        <div className="book-page">
          <p>By <strong>{book.author}</strong></p>
          <p>ISBN: {book.isbn}</p>
          <img src={book.cover} alt={book.name} className="" />
          {sameAuthorBooks.length > 1 && (
            <p>Books from this author: {sameAuthorBooks.map(item => (<Link className="same-author-link" to={item.isbn} key={item.isbn}>{item.name}</Link>))}</p>
          )}
          <BackLink />
        </div>
      </React.Fragment>
    )
  }
  return (
    <NotFound />
  )
}));

BookPage.wrappedComponent.propTypes = {
  booksStore: PropTypes.shape({
    books: PropTypes.array
  }).isRequired,
  params: PropTypes.shape({
    id: PropTypes.string
  }).isRequired
};

export default BookPage;
