const babysitter = require('../api/components/babysitter/network');
const services = require('../api/components/services/network');
const user = require('../api/components/user/network');
const city = require('../api/components/city/network');
const apiRoute = require('../api/apiRoutes');

const routes = (server) => {
  server.use('/api', apiRoute);
  server.use('/api/user', user);
  server.use('/api/babysitter', babysitter);
  server.use('/api/services', services);
  server.use('/api/city', city);
};

module.exports = routes;
