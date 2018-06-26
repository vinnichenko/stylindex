import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Link} from 'react-router';
import BackLink from './BackLink';

Enzyme.configure({ adapter: new Adapter() });

describe('Tests for ', () => {
  it('Should render correctly', () => {
    const component = shallow(<BackLink />);
    expect(component.find(Link).length).toBe(1);
  });
});
