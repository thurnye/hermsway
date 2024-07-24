import React from 'react';
import ReactDOM from 'react-dom';
import Appointments from './Appointments';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Appointments />, div);
  ReactDOM.unmountComponentAtNode(div);
});