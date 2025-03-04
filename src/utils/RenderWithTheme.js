import { ThemeProvider } from 'styled-components';
import React from 'react';
import themes from '../config/themes';

export default function RenderWithTheme(props) {
  return (
    <ThemeProvider theme={themes.find((t) => t.name === 'default')}>
      {props.children}
    </ThemeProvider>
  );
}
