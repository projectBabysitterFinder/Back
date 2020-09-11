const TABLE = 'USERS';
const METATABLE = 'USER_META';
const FOREINKEYMETATABLE = 'ID_USER';
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
    return store.listJoinByForeinKey(TABLE, METATABLE, FOREINKEYMETATABLE);
  };

  const get = (id) => {
      return store.getUser(TABLE, id);
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
      DES_ADDRESS_LAT: body.DES_ADDRESS_LAT,
      DES_ADDRESS_LONG: body.DES_ADDRESS_LONG,
      NUM_PHONE: body.NUM_PHONE,
      DES_EMAIL: body.DES_EMAIL,
      DES_COUNTRY: body.DES_CONUNTRY,
      DES_STATE: body.DES_STATE,
      DES_CITY: body.DES_CITY,
      NUM_STATUS: body.NUM_STATUS,
    };
    user.DES_PASSWORD = bcrypt.hashSync(user.DES_PASSWORD, 5);
    return store.insert(TABLE, user);
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
      DES_ADDRESS_LAT: body.DES_ADDRESS_LAT,
      DES_ADDRESS_LONG: body.DES_ADDRESS_LONG,
      NUM_PHONE: body.NUM_PHONE,
      DES_EMAIL: body.DES_EMAIL,
      DES_CONUNTRY: body.DES_CONUNTRY,
      DES_STATE: body.DES_STATE,
      DES_CITY: body.DES_CITY,
      NUM_STATUS: body.NUM_STATUS,
    };
    if (body.ID_ROL == 2) {
      const userMeta = {};
      userMeta.DES_DATA_STUDIES = body.DES_DATA_STUDIES;
      userMeta.DES_DATA_SPECIALTIES = body.DES_DATA_SPECIALTIES;
      userMeta.DES_DATA_ABILITIES = body.DES_DATA_ABILITIES;
      userMeta.DES_DATA_EXPERIECE = body.DES_DATA_EXPERIECE;
      userMeta.DES_DATA_SERVICE_TIME = body.DES_DATA_SERVICE_TIME;
      userMeta.NUM_HOURLY_RATE = body.NUM_HOURLY_RATE;
      userMeta.ID_AVAILABILITY = body.ID_AVAILABILITY;
      return store.update(TABLE, user, userMeta);
    } else {
      return store.update(TABLE, user);
    }

  };

  const remove = async (id) => {
    return await store.remove(TABLE, id);
  };

  const getEmail = async (email) => {
    return await store.getByCustomId(TABLE, 'DES_EMAIL', email)
  }

  return {
    list,
    get,
    insert,
    update,
    remove,
    listRol,
    listMetaData,
    getEmail
  };
};
