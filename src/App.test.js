import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import BooksList from './components/BooksList/BooksList';

Enzyme.configure({ adapter: new Adapter() });

describe('Tests for App', () => {
  it('Should render correctly', () => {
    const component = shallow(<App/>);
    expect(component.find(BooksList).length).toBe(1);
    expect(component.find('.App-title').length).toBe(1);
  })
});
