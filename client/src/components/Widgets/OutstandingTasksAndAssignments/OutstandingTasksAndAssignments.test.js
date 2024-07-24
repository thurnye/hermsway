import React from 'react';
import ReactDOM from 'react-dom';
import OutstandingTasksAndAssignments from './OutstandingTasksAndAssignments';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OutstandingTasksAndAssignments />, div);
  ReactDOM.unmountComponentAtNode(div);
});