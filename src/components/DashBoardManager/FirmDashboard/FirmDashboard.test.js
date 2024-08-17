import React from 'react';
import ReactDOM from 'react-dom';
import FirmDashboard from './FirmDashboard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FirmDashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});