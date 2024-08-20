import React from 'react';
import ReactDOM from 'react-dom';
import VerticalBarChart from './VerticalBarChart';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VerticalBarChart />, div);
  ReactDOM.unmountComponentAtNode(div);
});