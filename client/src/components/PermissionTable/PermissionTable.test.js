import React from 'react';
import ReactDOM from 'react-dom';
import PermissionTable from './PermissionTable';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PermissionTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});