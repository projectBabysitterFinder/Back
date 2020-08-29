const express = require('express');
const response = require('../network/response');
const router = express.Router();

router.get('/', (req, res) => {
  response.success(req, res, message, 200);
});

module.exports = router;

const message = [
  {
    user: 'http://localhost:3000/api/users',
    metadata: 'http://localhost:3000/api/metadata',
    services: 'http://localhost:3000/api/services',
  },
];
