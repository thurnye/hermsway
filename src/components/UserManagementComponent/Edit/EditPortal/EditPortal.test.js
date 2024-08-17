import React from 'react';
import ReactDOM from 'react-dom';
import EditPortal from './EditPortal';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditPortal />, div);
  ReactDOM.unmountComponentAtNode(div);
});