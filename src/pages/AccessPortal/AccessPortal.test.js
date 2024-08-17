import React from 'react';
import ReactDOM from 'react-dom';
import AccessPortal from './AccessPortal';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccessPortal />, div);
  ReactDOM.unmountComponentAtNode(div);
});