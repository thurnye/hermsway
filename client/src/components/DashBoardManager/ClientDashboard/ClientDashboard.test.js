import React from 'react';
import ReactDOM from 'react-dom';
import ClientDashboard from './ClientDashboard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClientDashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});