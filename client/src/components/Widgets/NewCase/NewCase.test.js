import React from 'react';
import ReactDOM from 'react-dom';
import NewCase from './NewCase';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewCase />, div);
  ReactDOM.unmountComponentAtNode(div);
});