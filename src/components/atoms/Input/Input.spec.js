import React from 'react';
import ReactDOM from 'react-dom';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import Input from './Input';

describe('component: Input', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <RenderWithTheme>
        <Input />
      </RenderWithTheme>,
      div
    );
  });
});
