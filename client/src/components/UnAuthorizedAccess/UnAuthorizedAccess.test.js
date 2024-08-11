import React from 'react';
import ReactDOM from 'react-dom';
import UnAuthorizedAccess from './UnAuthorizedAccess';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UnAuthorizedAccess />, div);
  ReactDOM.unmountComponentAtNode(div);
});