const usersMock = require('../../store/mocks/user');
const controller = require('../../api/components/user/controller');
const store = require('../../store/db');
const Controller = controller(store);


describe('controller - users', () => {
  test('should return object users', () => {
    return Controller.list().then((users) => {
      expect(users).toStrictEqual(usersMock);
    });
  });
});
