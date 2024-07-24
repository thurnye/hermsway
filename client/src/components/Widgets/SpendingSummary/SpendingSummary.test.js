import React from 'react';
import ReactDOM from 'react-dom';
import SpendingSummary from './SpendingSummary';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SpendingSummary />, div);
  ReactDOM.unmountComponentAtNode(div);
});