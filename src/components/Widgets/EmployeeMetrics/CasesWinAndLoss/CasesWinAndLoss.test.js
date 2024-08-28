import React from 'react';
import ReactDOM from 'react-dom';
import CasesWinAndLoss from './CasesWinAndLoss';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CasesWinAndLoss />, div);
  ReactDOM.unmountComponentAtNode(div);
});