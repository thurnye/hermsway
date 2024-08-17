import React from 'react';
import ReactDOM from 'react-dom';
import CompanyThemeSettingContainer from './CompanyThemeSettingContainer';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CompanyThemeSettingContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});