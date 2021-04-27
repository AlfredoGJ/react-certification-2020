import React, { createContext, useReducer } from 'react';
import themes from '../../config/themes';
import { storage } from '../../utils/storage';

const currentUser = storage.get('currentUser');
const initialContext = {
  searchText: '',
  lastSearch: '',
  theme: themes.find((t) => t.name === 'default'),
  sidemenu: false,
  user: currentUser,
};
const GlobalContext = createContext(initialContext);

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return { ...state, searchText: action.payload };

    case 'SET_LAST_SEARCH':
      return { ...state, lastSearch: state.searchText };

    case 'SET_THEME':
      return { ...state, theme: action.payload };

    case 'SET_USER':
      return { ...state, user: action.payload };

    case 'SET_SIDEMENU':
      return { ...state, sidemenu: action.payload };

    default:
      return state;
  }
};

const GlobalContextProvider = (props) => {
  const context = useReducer(reducer, props.context || initialContext);

  return (
    <GlobalContext.Provider value={context}>{props.children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
