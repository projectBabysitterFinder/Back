const TABLA = 'skill';

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
    const skill = {
      studies: body.studies,
      specialty: body.specialty,
      abilities: body.abilities,
      attitudes: body.attitudes,
      babysitter_id: body.babysitter_id,
    };

    return store.insert(TABLA, skill);
  };

  const update = async (body) => {
    const skill = {
      id: body.id,
      studies: body.studies,
      specialty: body.specialty,
      abilities: body.abilities,
      attitudes: body.attitudes,
      babysitter_id: body.babysitter_id,
    };
    return store.update(TABLA, skill);
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
