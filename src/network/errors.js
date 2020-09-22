const response = require('./response');
var fs = require('fs');
var log_file = fs.createWriteStream(__dirname + '/node.log', { flags: 'a' });

const errors = (err, req, res, next) => {
	log_file.write(new Date().toString() + ':' + err.stack)
	const message = err.message || 'Error interno';
	const status = err.statusCode || 500;
	response.error(req, res, message, status);
};

module.exports = errors;
