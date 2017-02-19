import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import AppContainer from './AppContainer';

describe('AppContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppContainer><div/></AppContainer>, div);
  });

  it('renders all the navigation items', () => {
    const appContainer = shallow(<AppContainer><div/></AppContainer>);
    const navLinks = appContainer.find('.nav-link');
    expect(navLinks.length).toBe(4);
    expect(navLinks.at(0).render().text()).toBe('Home');
    expect(navLinks.at(1).render().text()).toBe('Users');
    expect(navLinks.at(2).render().text()).toBe('Counter');
    expect(navLinks.at(3).render().text()).toBe('Reddit');
  });
});
