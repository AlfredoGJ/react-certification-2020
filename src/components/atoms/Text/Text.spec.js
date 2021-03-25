import React from 'react';
import ReactDOM from 'react-dom';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import Text from './Text';

describe('component: Text', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <RenderWithTheme>
        <Text />
      </RenderWithTheme>,
      div
    );
  });
});
