const TABLA = 'services';

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
    const services = {
      recommendation: body.recommendation,
      user_id: body.user_id,
      babysitter_id: body.babysitter_id,
      city_id: body.city_id,
    };

    return store.insert(TABLA, services);
  };

  const update = async (body) => {
    const services = {
      id: body.id,
			recommendation: body.recommendation,
      user_id: body.user_id,
      babysitter_id: body.babysitter_id,
      city_id: body.city_id,
    };
    return store.update(TABLA, services);
  };

  const remove = async (id) => {
    return await store.remove(TABLA, id);
  };

  return {
    list,
    get,
    update,
    insert,
    remove,
  };
};
