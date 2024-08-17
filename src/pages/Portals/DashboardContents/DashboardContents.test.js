import React from 'react';
import ReactDOM from 'react-dom';
import DashboardContents from './DashboardContents';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DashboardContents />, div);
  ReactDOM.unmountComponentAtNode(div);
});