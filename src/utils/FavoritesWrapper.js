import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import Favorites from '../components/pages/Favorites/Favorites';
import { GlobalContext } from '../providers/GlobalContext/GlobalContextProvider';
import { getUserData } from './UserDataStorage';

const FavoritesWrapper = () => {
  const [state] = useContext(GlobalContext);

  if (!state.user) return <Redirect to="/notFound" />;

  const userData = getUserData(state.user);
  console.log(userData);
  const { favorites } = userData;
  console.log(favorites);
  const favoritesStr = favorites.reduce((prev, current) => `${prev},${current}`);

  return <Favorites favoritesStr={favoritesStr} />;
};

export default FavoritesWrapper;
