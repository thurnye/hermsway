import React from 'react';
import ReactDOM from 'react-dom';
import OutcomeTrends from './OutcomeTrends';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OutcomeTrends />, div);
  ReactDOM.unmountComponentAtNode(div);
});