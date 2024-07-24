import React from 'react';
import ReactDOM from 'react-dom';
import DocumentManagement from './DocumentManagement';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DocumentManagement />, div);
  ReactDOM.unmountComponentAtNode(div);
});