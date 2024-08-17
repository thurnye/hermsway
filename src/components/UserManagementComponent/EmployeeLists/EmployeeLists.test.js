import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeLists from './EmployeeLists';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmployeeLists />, div);
  ReactDOM.unmountComponentAtNode(div);
});