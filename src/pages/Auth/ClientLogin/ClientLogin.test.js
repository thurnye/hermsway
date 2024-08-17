import React from 'react';
import ReactDOM from 'react-dom';
import ClientLogin from './ClientLogin';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClientLogin />, div);
  ReactDOM.unmountComponentAtNode(div);
});