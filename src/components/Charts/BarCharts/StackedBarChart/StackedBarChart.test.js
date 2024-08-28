import React from 'react';
import ReactDOM from 'react-dom';
import StackedBarChart from './StackedBarChart';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StackedBarChart />, div);
  ReactDOM.unmountComponentAtNode(div);
});