import React from 'react';
import ReactDOM from 'react-dom';
import ClientAndCases from './ClientAndCases';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClientAndCases />, div);
  ReactDOM.unmountComponentAtNode(div);
});