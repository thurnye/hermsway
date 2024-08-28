import React from 'react';
import ReactDOM from 'react-dom';
import ClientTable from './ClientTable';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClientTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});