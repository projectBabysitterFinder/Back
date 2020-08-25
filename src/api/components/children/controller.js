const TABLA = 'children';

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
    const children = {
      age: body.age,
      gender: body.gender,
      services_id: body.services_id,
    };
    return store.insert(TABLA, children);
  };

  const update = async (body) => {
    const children = {
      id: body.id,
      age: body.age,
      gender: body.gender,
      services_id: body.services_id,
    };
    return store.update(TABLA, children);
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
