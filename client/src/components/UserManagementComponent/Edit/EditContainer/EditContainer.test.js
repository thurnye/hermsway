import React from 'react';
import ReactDOM from 'react-dom';
import EditContainer from './EditContainer';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});