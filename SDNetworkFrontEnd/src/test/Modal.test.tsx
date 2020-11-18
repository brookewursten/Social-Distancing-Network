import React from 'react';
import {shallow,mount,render} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {MemoryRouter, Router}  from 'react-router-dom';
import ForgotModal from "../components/PublicPages/PublicComponents/ForgotModal";


Enzyme.configure({adapter:new Adapter()})

test('render the forgot pass modal', () => {
  const component =render(<MemoryRouter initialEntries={[ '/' ]}>
    <ForgotModal/>
    </MemoryRouter>)
    expect(component).toMatchSnapshot();
});