const TABLE = 'REVIEWS';

module.exports = (injectedStore) => {
  let store = injectedStore;

  if (!store) {
    store = require('../../../store/dummy');
  }

  const list = () => {
    return store.list(TABLE);
  };

  const listRol = (rol) => {
    return store.listRol(TABLE, rol);
  };


  const get = (id) => {
    return store.get(TABLE, id);
  };

  const getByIdNana = (id) => {
    return store.getByCustomId(TABLE, id, 'ID_USER_BABYSITTER');
  };

  const insert = async (body) => {
    const review = {
      ID_USER_CLIENT: body.ID_USER_CLIENT,
      ID_USER_BABYSITTER: body.ID_USER_BABYSITTER,
      DES_OPINION: body.DES_OPINION,
      NUM_STARS: body.NUM_STARS,
    };
    return store.insert(TABLE, review);
  };



  const remove = async (id) => {
    return await store.remove(TABLE, id);
  };

  return {
    list,
    get,
    insert,
    remove,
    listRol,
    getByIdNana
  };
};
