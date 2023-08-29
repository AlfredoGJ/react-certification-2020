import { saveUserData, getUserData } from './UserDataStorage';

describe('UserDataStorage', () => {
  it('Get user data', () => {
    const user = { id: '111888' };
    const data = getUserData(user);
    expect(data).toEqual({ favorites: [] });
  });

  it('save user data', () => {
    const user = { id: '111' };
    saveUserData(user, { hello: 'world' });
    const data = getUserData(user);
    expect(data).toEqual({ hello: 'world' });
  });
});
