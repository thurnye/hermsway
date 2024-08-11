import React from 'react';
import ReactDOM from 'react-dom';
import EditDashboard from './EditDashboard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditDashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});