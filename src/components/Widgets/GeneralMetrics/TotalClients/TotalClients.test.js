import React from 'react';
import ReactDOM from 'react-dom';
import TotalClients from './TotalClients';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TotalClients />, div);
  ReactDOM.unmountComponentAtNode(div);
});