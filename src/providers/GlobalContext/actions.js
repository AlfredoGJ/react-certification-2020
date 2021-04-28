const actions = {
  setSearchText: (payload) => ({ type: 'SET_SEARCH_TEXT', payload }),
  setLastSearch: () => ({ type: 'SET_LAST_SEARCH' }),
  setTheme: (payload) => ({ type: 'SET_THEME', payload }),
  setUser: (payload) => ({ type: 'SET_USER', payload }),
  setSidebar: (payload) => ({ type: 'SET_SIDEMENU', payload }),
  setFavoritesTracker: () => ({ type: 'FAVS_TRACKER' }),
};

export default actions;
