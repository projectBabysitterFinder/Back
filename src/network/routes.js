// const babysitter = require('../api/components/babysitter/network');
// const services = require('../api/components/services/network');
const user = require('../api/components/user/network');
const apiRoute = require('../api/apiRoutes');

const routes = (server) => {
	server.use('/api', apiRoute);
	// server.use('/api/auth/login', auth);
	// server.use('/api/babysitter', babysitter);
	// server.use('/api/services', services);
	server.use('/api/user', user);
};

module.exports = routes;
