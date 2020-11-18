import React from 'react';
import {shallow,mount,render} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Landing from '../components/PublicPages/Landing/Landing';
import {MemoryRouter, Router}  from 'react-router-dom';




Enzyme.configure({adapter:new Adapter()})



test('render the landing page', () => {
  //Component surrounded by router so it didn't complain about the navlinks inside
  const component =render(<MemoryRouter initialEntries={[ '/' ]}>
    <Landing/>
    </MemoryRouter>)
    expect(component).toMatchSnapshot();
});