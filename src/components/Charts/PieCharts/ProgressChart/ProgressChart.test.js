import React from 'react';
import ReactDOM from 'react-dom';
import ProgressChart from './ProgressChart';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProgressChart />, div);
  ReactDOM.unmountComponentAtNode(div);
});