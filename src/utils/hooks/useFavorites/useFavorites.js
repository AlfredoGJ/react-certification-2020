import { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../../providers/GlobalContext/GlobalContextProvider';
import { getUserData, saveUserData } from '../../UserDataStorage';
import actions from '../../../providers/GlobalContext/actions';

function useFavorites(id) {
  const [isFav, setFav] = useState(false);
  const [state, dispatch] = useContext(GlobalContext);

  function knowIsFav() {
    const userData = getUserData(state.user);
    if (userData) {
      if (userData.favorites.includes(id)) setFav(true);
      else setFav(false);
    }
  }
  useEffect(() => {
    knowIsFav();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function addToFavorites() {
    if (id) {
      const userData = getUserData(state.user);
      if (!userData.favorites.includes(id)) {
        userData.favorites.push(id);
        saveUserData(state.user, userData);
        setFav(true);
      }
    }
  }

  function removeFromFavorites() {
    if (id) {
      const userData = getUserData(state.user);
      if (userData.favorites.includes(id)) {
        userData.favorites = userData.favorites.filter((fav) => id !== fav);
        saveUserData(state.user, userData);
        setFav(false);
      }
    }
  }

  function toggle() {
    if (isFav) removeFromFavorites();
    else addToFavorites();

    dispatch(actions.setFavoritesTracker());
  }

  return [isFav, toggle];
}

export default useFavorites;
