const TABLA = 'META_USUARIOS';

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
    const META_DATOS = {
      ID_USUARIO: body.ID_USUARIO,
      ID_TIEMPO_SERVICIO: body.ID_TIEMPO_SERVICIO,
      DES_DATA_ESTUDIOS: {
        TITULO: body.TITULO,
        INSTITUCION: body.INSTITUCION,
      },
      DES_DATA_ESPECIALIDADES: body.DES_DATA_ESPECIALIDADES,
      DES_DATA_HABILIDADES: body.DES_DATA_HABILIDADES,
      DES_DATA_EXPERIENCIA: body.DES_DATA_EXPERIENCIA,
      DES_DATA_DISPONIBILIDAD: body.DES_DATA_DISPONIBILIDAD,
      NUM_TARIFA_HORA: body.NUM_TARIFA_HORA,
    };

    return store.insert(TABLA, META_DATOS);
  };

  const update = async (body) => {
    const META_DATOS = {
      ID: body.ID,
      ID_USUARIO: body.ID_USUARIO,
      ID_TIEMPO_SERVICIO: body.ID_TIEMPO_SERVICIO,
      DES_DATA_ESTUDIOS: body.DES_DATA_ESTUDIOS,
      DES_DATA_ESPECIALIDADES: body.DES_DATA_ESPECIALIDADES,
      DES_DATA_HABILIDADES: body.DES_DATA_HABILIDADES,
      DES_DATA_EXPERIENCIA: body.DES_DATA_EXPERIENCIA,
      DES_DATA_DISPONIBILIDAD: body.DES_DATA_DISPONIBILIDAD,
      NUM_TARIFA_HORA: body.NUM_TARIFA_HORA,
    };
    return store.update(TABLA, META_DATOS);
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
