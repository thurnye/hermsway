import React from 'react';
import ReactDOM from 'react-dom';
import Something from './Something';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Something />, div);
  ReactDOM.unmountComponentAtNode(div);
});