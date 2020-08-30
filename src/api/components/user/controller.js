const TABLE = 'USERS';
const METATABLE = 'USER_META';
const FOREINKEYMETATABLE='ID_USUARIO';
const bcrypt = require('bcrypt');

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
  const listMetaData = () => {
    return store.listJoinByForeinKey(TABLE,METATABLE,FOREINKEYMETATABLE);
  };

  const get = (id) => {
    return store.get(TABLE, id);
  };

  const insert = async (body) => {
    const user = {
      ID_ROL: body.ID_ROL,
      DES_FULLNAME: body.DES_FULLNAME,
      DATE_BIRTH: body.DATE_BIRTH,
      DES_URL_IMAGE: body.DES_URL_IMAGE,
      DES_USER: body.DES_USER,
      DES_PASSWORD: body.DES_PASSWORD,
      DES_ADDRESS: body.DES_ADDRESS,
      DES_ADDRESS_LATLONG: body.DES_ADDRESS_LATLONG,
      NUM_PHONE: body.NUM_PHONE,
      DES_EMAIL: body.DES_EMAIL,
      NUM_STATUS: body.NUM_STATUS,
    };
    user.DES_PASSWORD = bcrypt.hashSync(user.DES_PASSWORD, 5);
    if (body.ID_ROL == 2) {
      const userMeta = {};
      userMeta.DES_DATA_ESTUDIOS = body.DES_DATA_ESTUDIOS;
      userMeta.DES_DATA_ESPECIALIDADES = body.DES_DATA_ESPECIALIDADES;
      userMeta.DES_DATA_HABILIDADES = body.DES_DATA_HABILIDADES;
      userMeta.DES_DATA_EXPERIENCIA = body.DES_DATA_EXPERIENCIA;
      userMeta.DES_DATA_DISPONIBILIDAD = body.DES_DATA_DISPONIBILIDAD;
      userMeta.DES_DATA_TIEMPO_SERVICIOS = body.DES_DATA_TIEMPO_SERVICIOS;
      userMeta.NUM_TARIFA_HORA = body.NUM_TARIFA_HORA;
      return store.insert(TABLE, user, userMeta);
    } else {
      return store.insert(TABLE, user);
    }


  };

  const update = async (body) => {
    const user = {
      ID: body.ID,
      ID_ROL: body.ID_ROL,
      DES_FULLNAME: body.DES_FULLNAME,
      DATE_BIRTH: body.DATE_BIRTH,
      DES_URL_IMAGE: body.DES_URL_IMAGE,
      DES_USER: body.DES_USER,
      DES_PASSWORD: body.DES_PASSWORD,
      DES_ADDRESS: body.DES_ADDRESS,
      DES_ADDRESS_LATLONG: body.DES_ADDRESS_LATLONG,
      NUM_PHONE: body.NUM_PHONE,
      DES_EMAIL: body.DES_EMAIL,
      NUM_STATUS: body.NUM_STATUS,
    };
    if (body.ID_ROL == 2) {
      const userMeta = {};
      userMeta.DES_DATA_ESTUDIOS = body.DES_DATA_ESTUDIOS;
      userMeta.DES_DATA_ESPECIALIDADES = body.DES_DATA_ESPECIALIDADES;
      userMeta.DES_DATA_HABILIDADES = body.DES_DATA_HABILIDADES;
      userMeta.DES_DATA_EXPERIENCIA = body.DES_DATA_EXPERIENCIA;
      userMeta.DES_DATA_DISPONIBILIDAD = body.DES_DATA_DISPONIBILIDAD;
      userMeta.DES_DATA_TIEMPO_SERVICIOS = body.DES_DATA_TIEMPO_SERVICIOS;
      userMeta.NUM_TARIFA_HORA = body.NUM_TARIFA_HORA;
      return store.update(TABLE, user, userMeta);
    } else {
      return store.update(TABLE, user);
    }

  };

  const remove = async (id) => {
    return await store.remove(TABLE, id);
  };

  return {
    list,
    get,
    insert,
    update,
    remove,
    listRol,
    listMetaData
  };
};
