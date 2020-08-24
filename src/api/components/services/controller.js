const TABLA = 'services';

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
    const services = {
      name: body.name,
      username: body.username,
      phone: body.phone,
      email: body.email,
      status_admin: body.status_admin,
      score: body.score,
    };

    return store.insert(TABLA, services);
  };

  const update = async (body) => {
    const services = {
      id: body.id,
      name: body.name,
      username: body.username,
      phone: body.phone,
      email: body.email,
      status_admin: body.status_admin,
      score: body.score,
    };
    return store.update(TABLA, services);
  };



	const remove = async (id) => {
		return await store.remove(TABLA, id);
	};

	return {
		list,
		get,
		update,
		insert,
		remove,
	};
};
