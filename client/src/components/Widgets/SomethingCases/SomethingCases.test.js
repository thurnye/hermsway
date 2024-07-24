import React from 'react';
import ReactDOM from 'react-dom';
import SomethingCases from './SomethingCases';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SomethingCases />, div);
  ReactDOM.unmountComponentAtNode(div);
});