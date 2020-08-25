const TABLA = 'cost';

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
    const cost = {
      maxcost_hour: body.maxcost_hour,
      mincost_hour: body.mincost_hour,
      services_id: body.services_id,
    };
    return store.insert(TABLA, cost);
  };

  const update = async (body) => {
    const cost = {
      id: body.id,
      maxcost_hour: body.maxcost_hour,
      mincost_hour: body.mincost_hour,
      services_id: body.services_id,
    };
    return store.update(TABLA, cost);
  };

  const remove = async (id) => {
    return await store.remove(TABLA, id);
  };

  return {
    list,
    get,
    insert,
    remove,
    update
  };
};
