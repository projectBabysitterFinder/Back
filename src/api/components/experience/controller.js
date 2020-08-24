const TABLA = 'experience';

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

  const insert = async (body) => {
    const experience = {
      company: body.company,
      start: body.start,
      end: body.end,
      task: body.task,
      babysitter_id: body.babysitter_id,
    };

    return store.insert(TABLA, experience);
  };

  const update = async (body) => {
    const experience = {
      id: body.id,
      company: body.company,
      start: body.start,
      end: body.end,
      task: body.task,
      babysitter_id: body.babysitter_id,
    };
    return store.update(TABLA, experience);
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
