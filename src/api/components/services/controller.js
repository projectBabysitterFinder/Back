// const auth = require('../auth');
// const { nanoid } = require('nanoid');
const TABLA = 'service';

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

	// const upsert = async (body) => {
	// 	const user = {
	// 		id: body.id,
	// 		name: body.name,
	// 		username: body.username,
	// 		email: body.email,
	// 		phone: body.phone,
	// 		create: body.create,
	// 		status: body.status,
	// 	};

	// 	if (body.id) {
	// 		user.id = body.id;
	// 	} else {
	// 		user.id = nanoid();
	// 	}

	// 	if (body.password || body.username) {
	// 		await auth.upsert({
	// 			id: user.id,
	// 			username: user.username,
	// 			password: body.password,
	// 		});
	// 	}

	// 	return store.upsert(TABLA, user);
	// };

	const remove = async (id) => {
		return await store.remove(TABLA, id);
	};

	return {
		list,
		get,
		// upsert,
		remove,
	};
};
