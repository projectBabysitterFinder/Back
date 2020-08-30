const TABLA = 'RESEÑAS';

module.exports = (injectedStore) => {
  let store = injectedStore;

  if (!store) {
    store = require('../../../store/dummy');
  }

  const list = () => {
    return store.list(TABLA);
  };

  const listRol = (rol) => {
    return store.listRol(TABLA, rol);
  };


  const get = (id) => {
    return store.get(TABLA, id);
  };

  const getByIdNana = (id) => {
    return store.getByCustomId(TABLA, id,'ID_USUARIO_NANA');
  };

  const insert = async (body) => {
    const review = {
      ID_USUARIO_CLIENTE: body.ID_USUARIO_CLIENTE,
      ID_USUARIO_NANA: body.ID_USUARIO_NANA,
      DES_OPINION: body.DES_OPINION,
      NUM_ESTRELLAS: body.NUM_ESTRELLAS,
    };
      return store.insert(TABLA, review);
  };

  

  const remove = async (id) => {
    return await store.remove(TABLA, id);
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
