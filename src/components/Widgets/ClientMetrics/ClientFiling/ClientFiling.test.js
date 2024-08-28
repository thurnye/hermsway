import React from 'react';
import ReactDOM from 'react-dom';
import ClientFiling from './ClientFiling';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClientFiling />, div);
  ReactDOM.unmountComponentAtNode(div);
});