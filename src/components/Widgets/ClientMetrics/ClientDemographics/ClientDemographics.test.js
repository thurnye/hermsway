import React from 'react';
import ReactDOM from 'react-dom';
import ClientDemographics from './ClientDemographics';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClientDemographics />, div);
  ReactDOM.unmountComponentAtNode(div);
});