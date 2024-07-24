import React from 'react';
import ReactDOM from 'react-dom';
import ClientReports from './ClientReports';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClientReports />, div);
  ReactDOM.unmountComponentAtNode(div);
});