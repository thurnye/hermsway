import React from 'react';
import ReactDOM from 'react-dom';
import EditEmployee from './EditEmployee';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditEmployee />, div);
  ReactDOM.unmountComponentAtNode(div);
});