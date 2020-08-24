const TABLA = 'user';

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

  const upsert = async (body) => {
    const user = {
      name: body.name,
      username: body.username,
      phone: body.phone,
      email: body.email,
      status_admin: body.status_admin,
      score: body.score,
    };

    if (!body.status_admin) {
      user.status_admin = 0;
    }

    if (!body.score) {
      user.code = 0;
    }

    return store.upsert(TABLA, user, query);
  };

  const remove = async (id) => {
    return await store.remove(TABLA, id);
  };

  return {
    list,
    get,
    upsert,
    remove,
  };
};
