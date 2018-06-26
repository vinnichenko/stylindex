import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import {Link} from 'react-router';
import Adapter from 'enzyme-adapter-react-16';
import BookListItem from './BookListItem';

Enzyme.configure({ adapter: new Adapter() });

describe('Tests for BookListItem', () => {
  const book = {
    name: 'book',
    cover: '111',
    author: 'author',
    isbn: '123123'
  };
  it('Should render correctly', () => {
    const component = shallow(<BookListItem book={book} />);
    expect(component.find('.book-list-item').length).toBe(1);
    expect(component.find('.book-list-item-thumb').length).toBe(1);
    expect(component.find(Link).length).toBe(1);
  })
});
