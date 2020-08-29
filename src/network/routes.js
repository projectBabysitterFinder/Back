const user = require('../api/components/user/network');
const metadata = require('../api/components/metadata/network');
const apiRoute = require('../api/apiRoutes');

const routes = (server) => {
  server.use('/api', apiRoute);
  server.use('/api/users', user);
  server.use('/api/metadata', metadata);
};

module.exports = routes;
