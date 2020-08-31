const express = require('express');
const response = require('../network/response');
const router = express.Router();

router.get('/', (req, res) => {
  response.success(req, res, message, 200);
});

module.exports = router;

const message = [
  {
    docs: 'http://localhost:3001/api-docs',
    user: 'http://localhost:3001/api/users',
    reviews: 'http://localhost:3001/api/reviews',
    services: 'http://localhost:3001/api/services',
  },
];
