import React from 'react';
import ReactDOM from 'react-dom';
import Communication from './Communication';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Communication />, div);
  ReactDOM.unmountComponentAtNode(div);
});