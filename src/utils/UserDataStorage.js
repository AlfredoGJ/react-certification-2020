import { storage } from './storage';

function saveUserData(user, userData) {
  if (user) storage.set(user.id, userData);
  else storage.set('0000', userData);
}

function getUserData(user) {
  let data = null;

  if (user) {
    data = storage.get(user.id);
    if (data === null) {
      data = { favorites: [] };
      saveUserData(user.id, data);
    }
  }
  // else {
  //   data = storage.get('0000');
  //   if (data === null) {
  //     data = { favorites: [] };
  //     saveUserData({id:'0000'}, data);
  //   }
  // }
  return data;
}

export { saveUserData, getUserData };
