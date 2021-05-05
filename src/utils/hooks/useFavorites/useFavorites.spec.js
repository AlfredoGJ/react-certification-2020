import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { GlobalContextProvider } from '../../../providers/GlobalContext/GlobalContextProvider';
import useFavorites from './useFavorites';
import themes from '../../../config/themes';

describe('Hook: useFavorites', () => {
  const mockContext = {
    searchText: '',
    lastSearch: '',
    theme: themes.find((t) => t.name === 'default'),
    user: {
      id: '1234',
      name: 'Wizeline',
      avatarUrl:
        'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
    },
    sidemenu: false,
  };

  it('should return false for a id not in favorites', () => {
    const wrapper = ({ children }) => (
      <GlobalContextProvider context={mockContext}> {children}</GlobalContextProvider>
    );
    const { result } = renderHook(() => useFavorites(['1774']), {
      wrapper,
    });
    expect(result.current[0]).toBe(false);
  });

  it('should return true for a id  in favorites', () => {
    const wrapper = ({ children }) => (
      <GlobalContextProvider context={mockContext}>{children} </GlobalContextProvider>
    );
    const { result } = renderHook(() => useFavorites(['55443']), {
      wrapper,
    });
    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe(true);
  });

  it('should be false for an id added and removed from favorites', () => {
    const wrapper = ({ children }) => (
      <GlobalContextProvider context={mockContext}>{children} </GlobalContextProvider>
    );
    const { result } = renderHook(() => useFavorites(['55443']), {
      wrapper,
    });
    act(() => {
      result.current[1]();
      result.current[1]();
    });
    expect(result.current[0]).toBe(false);
  });
});
