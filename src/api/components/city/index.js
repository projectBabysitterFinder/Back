const store = require('../../../store/mysql');
// const store = require('../../../store/dummy');
const controller = require('./controller');

module.exports = controller(store);