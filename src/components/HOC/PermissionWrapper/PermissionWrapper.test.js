import React from 'react';
import ReactDOM from 'react-dom';
import PermissionWrapper from './PermissionWrapper';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PermissionWrapper />, div);
  ReactDOM.unmountComponentAtNode(div);
});