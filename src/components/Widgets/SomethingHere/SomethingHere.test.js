import React from 'react';
import ReactDOM from 'react-dom';
import SomethingHere from './SomethingHere';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SomethingHere />, div);
  ReactDOM.unmountComponentAtNode(div);
});