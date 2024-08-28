import React from 'react';
import ReactDOM from 'react-dom';
import DoublePie from './DoublePie';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DoublePie />, div);
  ReactDOM.unmountComponentAtNode(div);
});