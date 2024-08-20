import React from 'react';
import ReactDOM from 'react-dom';
import HorizontalBarChart from './HorizontalBarChart';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HorizontalBarChart />, div);
  ReactDOM.unmountComponentAtNode(div);
});