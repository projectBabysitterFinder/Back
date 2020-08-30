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
    reviews: 'http://localhost:3000/api/reviews',
    services: 'http://localhost:3000/api/services',
  },
];
