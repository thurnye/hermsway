import React from 'react';
import ReactDOM from 'react-dom';
import RecentCommunication from './RecentCommunication';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RecentCommunication />, div);
  ReactDOM.unmountComponentAtNode(div);
});