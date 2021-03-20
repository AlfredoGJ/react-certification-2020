import React from 'react';
import ReactDOM from 'react-dom';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import DetailedVideoCard from './DetailedVideoCard';

describe('component: DetailedVideoCard', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <RenderWithTheme>
        <DetailedVideoCard />
      </RenderWithTheme>,
      div
    );
  });
});
