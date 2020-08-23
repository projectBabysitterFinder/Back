const auth = require('../auth/index');
const { nanoid } = require('nanoid');

const TABLA = 'user';

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

  const upsert = async (body) => {
    const user = {
      name: body.name,
      username: body.username,
      // password: body.password
    };

    if (body.id) {
      user.id = body.id;
    } else {
      user.id = nanoid();
    }
    console.log(user);
    // if (body.password || body.username) {
    //   await auth.upsert({
    //     id: user.id,
    //     username: user.username,
    //     password: body.password,
    //   });
    // }

    return store.upsert(TABLA, user);
  };

  const remove = async (id) => {
    return await store.remove(TABLA, id);
  };

  return {
    list,
    get,
    upsert,
    remove,
  };
};
