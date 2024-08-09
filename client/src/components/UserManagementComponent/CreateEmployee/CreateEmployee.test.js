import React from 'react';
import ReactDOM from 'react-dom';
import CreateEmployee from './CreateEmployee';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateEmployee />, div);
  ReactDOM.unmountComponentAtNode(div);
});
