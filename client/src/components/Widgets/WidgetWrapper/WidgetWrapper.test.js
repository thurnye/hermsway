import React from 'react';
import ReactDOM from 'react-dom';
import WidgetWrapper from './WidgetWrapper';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WidgetWrapper />, div);
  ReactDOM.unmountComponentAtNode(div);
});