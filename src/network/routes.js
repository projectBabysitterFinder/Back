const user = require('../api/components/user/network');
const reviews = require('../api/components/resenas/network');
const apiRoute = require('../api/apiRoutes');
const services = require('../api/components/services/network');

const routes = (server) => {
  server.use('/api', apiRoute);
  server.use('/api/users', user);
  server.use('/api/reviews', reviews);
  server.use('/api/services', services);
};

module.exports = routes;
