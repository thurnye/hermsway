import React from 'react';
import ReactDOM from 'react-dom';
import ClientManagement from './ClientManagement';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClientManagement />, div);
  ReactDOM.unmountComponentAtNode(div);
});