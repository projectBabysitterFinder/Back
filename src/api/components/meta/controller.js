const TABLE = 'USER_META';
const AVAILABILITY = 'AVAILABILITY';

module.exports = (injectedStore) => {
  let store = injectedStore;

  if (!store) {
    store = require('../../../store/dummy');
  }

  const list = () => {
    return store.listJoinByForeinKey(AVAILABILITY,TABLE,'ID_AVAILABILITY');
  };


  const get = (id) => {
    return store.get(TABLE, id);
  };

  const insert = async (body) => {
    const userMeta = {};
    userMeta.ID_USER = body.ID_USER;
    userMeta.DES_DATA_STUDIES = body.DES_DATA_STUDIES;
    userMeta.DES_DATA_SPECIALTIES = body.DES_DATA_SPECIALTIES;
    userMeta.DES_DATA_ABILITIES = body.DES_DATA_ABILITIES;
    userMeta.DES_DATA_EXPERIECE = body.DES_DATA_EXPERIECE;
    userMeta.DES_DATA_SERVICE_TIME = body.DES_DATA_SERVICE_TIME;
    userMeta.ID_AVAILABILITY = body.ID_AVAILABILITY;
      return store.insert(TABLE, userMeta);
  };

  const update = async (body) => {
    const userMeta = {};
    userMeta.ID = body.ID;
    userMeta.ID_USER = body.ID_USER;
    userMeta.DES_DATA_STUDIES = body.DES_DATA_STUDIES;
    userMeta.DES_DATA_SPECIALTIES = body.DES_DATA_SPECIALTIES;
    userMeta.DES_DATA_ABILITIES = body.DES_DATA_ABILITIES;
    userMeta.DES_DATA_EXPERIECE = body.DES_DATA_EXPERIECE;
    userMeta.DES_DATA_SERVICE_TIME = body.DES_DATA_SERVICE_TIME;
    userMeta.ID_AVAILABILITY = body.ID_AVAILABILITY;
      return store.update(TABLE, userMeta);
  };

  return {
    list,
    get,
    insert,
    update,
  };
};
