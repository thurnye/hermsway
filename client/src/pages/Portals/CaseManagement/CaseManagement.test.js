import React from 'react';
import ReactDOM from 'react-dom';
import CaseManagement from './CaseManagement';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CaseManagement />, div);
  ReactDOM.unmountComponentAtNode(div);
});