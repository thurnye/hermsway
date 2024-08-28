import React from 'react';
import ReactDOM from 'react-dom';
import ClientSatisfaction from './ClientSatisfaction';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClientSatisfaction />, div);
  ReactDOM.unmountComponentAtNode(div);
});