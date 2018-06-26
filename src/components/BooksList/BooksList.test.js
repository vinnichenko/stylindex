import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BooksList from './BooksList';
import BookListItem from '../BookListItem/BookListItem';

Enzyme.configure({ adapter: new Adapter() });

describe('Tests for BooksList', () => {
  const booksStore = {
    books: [
      {
        isbn: '1'
      },
      {
        isbn: '2'
      }
    ],
    getBooks: jest.fn()
  };
  it('Should render correctly', () => {
    const component = shallow(<BooksList booksStore={booksStore} />).shallow();
    expect(booksStore.getBooks).toHaveBeenCalled();
    expect(component.find('.books-list').length).toBe(1);
    expect(component.find(BookListItem).length).toBe(booksStore.books.length);
  })
});
