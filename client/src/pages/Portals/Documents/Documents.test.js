import React from 'react';
import ReactDOM from 'react-dom';
import Documents from './Documents';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Documents />, div);
  ReactDOM.unmountComponentAtNode(div);
});