import React from 'react';
import ReactDOM from 'react-dom';
import TasksAndReminders from './TasksAndReminders';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TasksAndReminders />, div);
  ReactDOM.unmountComponentAtNode(div);
});