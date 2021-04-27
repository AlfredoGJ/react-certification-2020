import { renderHook, act } from '@testing-library/react-hooks';
import { GlobalContextProvider } from './GlobalContextProvider';
import themes from '../../config/themes';
import useGlobalContext from './useGlobalContext';
import actions from './actions';

describe('component: GlobalContextProvider', () => {
  const initialContext = {
    searchText: '',
    lastSearch: '',
    theme: themes.find((t) => t.name === 'default'),
    user: null,
    sidemenu: false,
  };
  test('The initial state and dispatch functions are available', () => {
    const { result } = renderHook(() => useGlobalContext(), {
      wrapper: GlobalContextProvider,
    });

    expect(result.current[0]).toEqual(initialContext);
    expect(typeof result.current[1]).toBe('function');
  });

  test('Dispatching the setTheme action changes the theme', () => {
    const { result } = renderHook(() => useGlobalContext(), {
      wrapper: GlobalContextProvider,
    });
    act(() => {
      result.current[1](actions.setTheme(themes.dark));
    });

    expect(result.current[0].theme).toEqual(themes.dark);
    expect(result.current[0].searchText).toEqual(initialContext.searchText);
    expect(result.current[0].lastSearch).toEqual(initialContext.lastSearch);
    expect(result.current[0].user).toEqual(null);
  });

  test('Dipatching the setSearchText action changes the searchText', () => {
    const { result } = renderHook(() => useGlobalContext(), {
      wrapper: GlobalContextProvider,
    });
    act(() => {
      result.current[1](actions.setSearchText('wizeline'));
    });

    expect(result.current[0].theme).toEqual(initialContext.theme);
    expect(result.current[0].searchText).toEqual('wizeline');
    expect(result.current[0].lastSearch).toEqual(initialContext.lastSearch);
    expect(result.current[0].user).toEqual(null);
  });

  test('Dispathing the setLastSearch action changes the lastSearch', () => {
    const { result } = renderHook(() => useGlobalContext(), {
      wrapper: GlobalContextProvider,
    });
    act(() => {
      result.current[1](actions.setSearchText('wizeline'));
      result.current[1](actions.setLastSearch());
    });

    expect(result.current[0].theme).toEqual(initialContext.theme);
    expect(result.current[0].searchText).toEqual('wizeline');
    expect(result.current[0].lastSearch).toEqual('wizeline');
    expect(result.current[0].user).toEqual(null);
  });

  test('Dispathing the setUser action changes the user', () => {
    const { result } = renderHook(() => useGlobalContext(), {
      wrapper: GlobalContextProvider,
    });
    act(() => {
      result.current[1](actions.setUser({ id: 123, name: 'wizeline' }));
    });

    expect(result.current[0].theme).toEqual(initialContext.theme);
    expect(result.current[0].searchText).toEqual('');
    expect(result.current[0].lastSearch).toEqual('');
    expect(result.current[0].user).toEqual({ id: 123, name: 'wizeline' });
  });
});
