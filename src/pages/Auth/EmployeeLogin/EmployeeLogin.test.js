import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeLogin from './EmployeeLogin';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmployeeLogin />, div);
  ReactDOM.unmountComponentAtNode(div);
});