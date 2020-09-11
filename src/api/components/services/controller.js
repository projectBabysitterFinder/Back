const TABLE = 'SERVICES';

module.exports = (injectedStore) => {
  let store = injectedStore;

  if (!store) {
    store = require('../../../store/dummy');
  }

  const list = () => {
    return store.list(TABLE);
  };

  const get = (id) => {
    return store.get(TABLE, id);
  };

  const insert = async (body) => {
    let services = {
      ID_USER_CLIENT: body.ID_USER_CLIENT,
      ID_USER_BABYSITTER: body.ID_USER_BABYSITTER,
      DES_EMAIL: body.DES_EMAIL,
      DES_PHONE: body.DES_PHONE,
      DES_ADDRESS: body.DES_ADDRESS,
      DES_ADDRESS_LAT: body.DES_ADDRESS_LAT,
      DES_ADDRESS_LONG: body.DES_ADDRESS_LONG,
      DES_RECOMMENDATIONS: body.DES_RECOMMENDATIONS,
      DES_DATA_BOYS: body.DES_DATA_BOYS,
      DES_DATA_HOURS: body.DES_DATA_HOURS,
      NUM_TOTAL_COST: body.NUM_TOTAL_COST,
      NUM_STATUS: body.NUM_STATUS,
    }

    try {
      services.DES_DATA_BOYS=JSON.stringify(services.DES_DATA_BOYS);
      services.DES_DATA_HOURS=JSON.stringify(services.DES_DATA_HOURS);
    } catch (error) {
      services.DES_DATA_BOYS=body.DES_DATA_BOYS;
      services.DES_DATA_HOURS=body.DES_DATA_HOURS;
    }
    return store.insert(TABLE, services);
  };

  const update = async (body) => {
    const services = {
      ID: body.ID,
      ID_USER_CLIENT: body.ID_USER_CLIENT,
      ID_USER_BABYSITTER: body.ID_USER_BABYSITTER,
      DES_ADDRESS: body.DES_ADDRESS,
      DES_ADDRESS_LAT: body.DES_ADDRESS_LAT,
      DES_ADDRESS_LONG: body.DES_ADDRESS_LONG,
      DES_RECOMMENDATIONS: body.DES_RECOMMENDATIONS,
      DES_DATA_BOYS: body.DES_DATA_BOYS,
      DES_DATA_HOURS: body.DES_DATA_HOURS,
      NUM_TOTAL_COST: body.NUM_TOTAL_COST,
      NUM_STATUS: body.NUM_STATUS,
    }
    return store.update(TABLE, services);
  };


  return {
    list,
    get,
    update,
    insert,
  };
};
