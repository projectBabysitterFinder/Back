const babysitter = require('../api/components/babysitter/network');
const services = require('../api/components/services/network');
const user = require('../api/components/user/network');
const city = require('../api/components/city/network');
const skill = require('../api/components/skill/network');
const experience = require('../api/components/experience/network');
const location_user = require('../api/components/location_user/network');
const children = require('../api/components/children/network');
const cost = require('../api/components/cost/network');
const location_babysitter = require('../api/components/location_babysitter/network');
const allDataUser = require('../api/components/allDataUser/network');
const allDataBabysitter = require('../api/components/allDataBabysitter/network');
const babysitterSkill = require('../api/components/babysitterSkill/network');
const babysitterExperience = require('../api/components/babysitterExperience/network');
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
  server.use('/api/children', children);
  server.use('/api/cost', cost);
  server.use('/api/allDataUser', allDataUser);
  server.use('/api/allDataBabysitter', allDataBabysitter);
  server.use('/api/babysitterSkill', babysitterSkill);
  server.use('/api/babysitterExperience', babysitterExperience);
};

module.exports = routes;
