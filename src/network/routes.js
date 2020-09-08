const user = require('../api/components/user/network');
const reviews = require('../api/components/reviews/network');
const apiRoute = require('../api/apiRoutes');
const services = require('../api/components/services/network');
const meta = require('../api/components/meta/network');
const availability = require('../api/components/availability/network');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../../swagger.json');

const routes = (server) => {
  server.use('/api', apiRoute);
  server.use('/api-docs',  swaggerUi.serve, swaggerUi.setup(swaggerDoc));
  server.use('/api/users', user);
  server.use('/api/reviews', reviews);
  server.use('/api/services', services);
  server.use('/api/meta', meta);
  server.use('/api/availability', availability);
};

module.exports = routes;
