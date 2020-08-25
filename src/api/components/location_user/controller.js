const TABLA = 'location_user';

module.exports = (injectedStore) => {
  let store = injectedStore;

  if (!store) {
    store = require('../../../store/dummy');
  }

  const list = () => {
    return store.list(TABLA);
  };

  const get = (id) => {
    return store.get(TABLA,  id);
  };

  const insert = async (body) => {
    const location = {
      country: body.country,
      state: body.state,
      city: body.city,
      address: body.address,
      user_id: body.user_id,
    };

    return store.insert(TABLA, location);
  };

  const update = async (body) => {
    const location = {
      id: body.id,
      country: body.country,
      state: body.state,
      city: body.city,
      address: body.address,
      user_id: body.user_id,
    };
    return store.update(TABLA, location);
  };



  const remove = async (id) => {
    return await store.remove(TABLA, id);
  };

  return {
    list,
    get,
    insert,
    update,
    remove,
  };
};
