import React from 'react';
import ReactDOM from 'react-dom';
import ActiveCases from './ActiveCases';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActiveCases />, div);
  ReactDOM.unmountComponentAtNode(div);
});