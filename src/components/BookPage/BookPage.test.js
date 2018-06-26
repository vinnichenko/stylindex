import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BookPage from './BookPage';
import BackLink from '../BackLink/BackLink';
import NotFound from '../NotFound/NotFound';

Enzyme.configure({ adapter: new Adapter() });

describe('Tests for ', () => {
  const props = {
    booksStore: {
      books: [
        {
          isbn: '111',
          author: 'test'
        },
        {
          isbn: '222',
          author: '1test'
        },
        {
          isbn: '333',
          author: 'test'
        }
      ]
    },
    params: {
      id: '111'
    }
  };
  it('Should render correctly', () => {
    const component = shallow(<BookPage {...props} />).shallow();
    expect(component.find('.App-title').length).toBe(1);
    expect(component.find('.book-page').length).toBe(1);
    expect(component.find(BackLink).length).toBe(1);
    expect(component.find('.same-author-link').length).toBe(2);
  });

  it('Should render NotFound component', () => {
    const booksStore = {
      books: []
    };
    const component = shallow(<BookPage params={props.params} booksStore={booksStore} />).shallow();
    expect(component.find('.book-page').length).toBe(0);
    expect(component.find(NotFound).length).toBe(1);
  });
});
