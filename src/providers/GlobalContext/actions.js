const actions = {
  setSearchText: (payload) => ({ type: 'SET_SEARCH_TEXT', payload }),
  setLastSearch: () => ({ type: 'SET_LAST_SEARCH' }),
  setTheme: (payload) => ({ type: 'SET_THEME', payload }),
};

export default actions;
