import React from 'react';
import ReactDOM from 'react-dom';
import EmployeesReports from './EmployeesReports';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmployeesReports />, div);
  ReactDOM.unmountComponentAtNode(div);
});