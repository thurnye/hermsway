import React from 'react';
import ReactDOM from 'react-dom';
import MultiAxisLineChart from './MultiAxisLineChart';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MultiAxisLineChart />, div);
  ReactDOM.unmountComponentAtNode(div);
});