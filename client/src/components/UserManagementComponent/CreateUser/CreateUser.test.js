import React from 'react';
import ReactDOM from 'react-dom';
import CreateUser from './CreateUser';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateUser />, div);
  ReactDOM.unmountComponentAtNode(div);
});