const express = require('express');
const response = require('../network/response');
const router = express.Router();

router.get('/', (req, res) => {
	response.success(req, res, message, 200);
});

module.exports = router;

const message = [
	{
		babysitter: 'http://localhost:3000/api/babysitter',
		user: 'http://localhost:3000/api/user',
		services: 'http://localhost:3000/api/services',
	},
];
