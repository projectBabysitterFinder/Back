const data = {
  tableOne: 'babysitter',
  tableTwo: 'experience',
  idOne: 'id',
  idTwo: 'babysitter_id',
};

module.exports = (injectedStore) => {
  let store = injectedStore;

  if (!store) {
    store = require('../../../store/dummy');
  }

  const join = () => {
    return store.join(data);
  };

  const joinId = (id) => {
    return store.joinId(data, id);
  };

  return {
    join,
    joinId,
  };
};
