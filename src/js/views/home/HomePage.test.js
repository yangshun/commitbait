import React from 'react';
import { shallow } from 'enzyme';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders both logos', () => {
    const homePage = shallow(<HomePage/>);
    expect(homePage.find('.logo').at(0).prop('alt')).toBe('React Logo');
    expect(homePage.find('.logo').at(1).prop('alt')).toBe('Redux Logo');
  });
});
