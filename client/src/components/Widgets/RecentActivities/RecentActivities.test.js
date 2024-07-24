import React from 'react';
import ReactDOM from 'react-dom';
import RecentActivities from './RecentActivities';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RecentActivities />, div);
  ReactDOM.unmountComponentAtNode(div);
});