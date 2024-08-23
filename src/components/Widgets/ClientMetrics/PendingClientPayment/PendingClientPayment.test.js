import React from 'react';
import ReactDOM from 'react-dom';
import PendingClientPayment from './PendingClientPayment';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PendingClientPayment />, div);
  ReactDOM.unmountComponentAtNode(div);
});