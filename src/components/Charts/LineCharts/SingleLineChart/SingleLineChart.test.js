import React from 'react';
import ReactDOM from 'react-dom';
import SingleLineChart from './SingleLineChart';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SingleLineChart />, div);
  ReactDOM.unmountComponentAtNode(div);
});