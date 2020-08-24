const TABLA = 'city';

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
    const city = {
      id: body.id,
      country: body.country,
      state: body.state,
      city: body.city,
    };
    return store.insert(TABLA, city);
  };

  const update = async (body) => {
    const city = {
      id: body.id,
      country: body.country,
      state: body.state,
      city: body.city,
    };
    return store.update(TABLA, city);
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
