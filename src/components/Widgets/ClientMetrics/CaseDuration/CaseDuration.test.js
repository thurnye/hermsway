import React from 'react';
import ReactDOM from 'react-dom';
import CaseDuration from './CaseDuration';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CaseDuration />, div);
  ReactDOM.unmountComponentAtNode(div);
});