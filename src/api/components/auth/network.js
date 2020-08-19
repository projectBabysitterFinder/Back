const express = require('express');
const response = require('../../../network/response');
const controller = require('./index');
const router = express.Router();

router.post('/', (req, res) => {
	controller
		.login(req.body.username, req.body.password)
		.then((token) => {
      response.success(req, res, token, 200);
		})
		.catch(() => {
			response.error(req, res, 'Información Invalida', 400);
		});
});

module.exports = router;