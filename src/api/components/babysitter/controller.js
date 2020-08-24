const TABLA = 'babysitter';

module.exports = (injectedStore) => {
  let store = injectedStore;

  if (!store) {
    store = require('../../../store/dummy');
  }

  const list = () => {
    return store.list(TABLA);
  };

  const get = (id) => {
    return store.get(TABLA, id);
  };

  const insert = async (body) => {
    const babysitter = {
      id: body.id,
      name: body.name,
      username: body.username,
      email: body.email,
      phone: body.phone,
      age: body.age,
      status_admin: body.status_admin,
    };
    return store.insert(TABLA, babysitter);
  };

  const update = async (body) => {
    const user = {
      id: body.id,
      name: body.name,
      username: body.username,
      email: body.email,
      phone: body.phone,
      age: body.age,
      status_admin: body.status_admin,
    };
    return store.update(TABLA, user);
  };

  const remove = async (id) => {
    return await store.remove(TABLA, id);
  };

  return {
    list,
    get,
    insert,
    remove,
    update
  };
};
