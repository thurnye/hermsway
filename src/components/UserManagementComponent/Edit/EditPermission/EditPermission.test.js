import React from 'react';
import ReactDOM from 'react-dom';
import EditPermission from './EditPermission';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditPermission />, div);
  ReactDOM.unmountComponentAtNode(div);
});