import { ThemeContext } from 'styled-components';
import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContextProvider';

export default function ({ children }) {
  const [state] = useContext(GlobalContext);
  return <ThemeContext.Provider value={state.theme}>{children}</ThemeContext.Provider>;
}
