import React from 'react';
import ReactDOM from 'react-dom';
import CaseLoadDistribution from './CaseLoadDistribution';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CaseLoadDistribution />, div);
  ReactDOM.unmountComponentAtNode(div);
});