import React from 'react';
import ReactDOM from 'react-dom';
import BillingAndFinance from './BillingAndFinance';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BillingAndFinance />, div);
  ReactDOM.unmountComponentAtNode(div);
});