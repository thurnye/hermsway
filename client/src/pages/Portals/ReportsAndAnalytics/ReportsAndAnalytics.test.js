import React from 'react';
import ReactDOM from 'react-dom';
import ReportsAndAnalytics from './ReportsAndAnalytics';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReportsAndAnalytics />, div);
  ReactDOM.unmountComponentAtNode(div);
});