import React from 'react';
import ReactDOM from 'react-dom';
import UnAssignedCases from './UnAssignedCases';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UnAssignedCases />, div);
  ReactDOM.unmountComponentAtNode(div);
});