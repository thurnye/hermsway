import React from 'react';
import ReactDOM from 'react-dom';
import SettingContainer from './SettingContainer';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SettingContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});