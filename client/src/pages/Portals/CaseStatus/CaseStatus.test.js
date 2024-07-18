import React from 'react';
import ReactDOM from 'react-dom';
import CaseStatus from './CaseStatus';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CaseStatus />, div);
  ReactDOM.unmountComponentAtNode(div);
});