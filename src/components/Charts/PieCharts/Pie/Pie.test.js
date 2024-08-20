import React from 'react';
import ReactDOM from 'react-dom';
import Pie from './Pie';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pie />, div);
  ReactDOM.unmountComponentAtNode(div);
});