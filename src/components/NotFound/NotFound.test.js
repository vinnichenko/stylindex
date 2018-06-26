import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from './NotFound';
import BackLink from '../BackLink/BackLink';

Enzyme.configure({ adapter: new Adapter() });

describe('Tests for NotFound component', () => {
  it('Should render correctly', () => {
    const component = shallow(<NotFound/>);
    expect(component.find(BackLink).length).toBe(1);
    expect(component.find('h3').length).toBe(1);
  })
});
