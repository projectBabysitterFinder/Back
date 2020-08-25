const babysitter = require('../api/components/babysitter/network');
const services = require('../api/components/services/network');
const user = require('../api/components/user/network');
const city = require('../api/components/city/network');
const skill = require('../api/components/skill/network');
const experience = require('../api/components/experience/network');
const location_user = require('../api/components/location_user/network');
const location_babysitter = require('../api/components/location_babysitter/network');
const apiRoute = require('../api/apiRoutes');

const routes = (server) => {
  server.use('/api', apiRoute);
  server.use('/api/user', user);
  server.use('/api/babysitter', babysitter);
  server.use('/api/services', services);
  server.use('/api/city', city);
  server.use('/api/skill', skill);
  server.use('/api/experience', experience);
  server.use('/api/location_user', location_user);
  server.use('/api/location_babysitter', location_babysitter);
};

module.exports = routes;
