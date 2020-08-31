const express = require('express');
const response = require('../network/response');
const router = express.Router();
require('dotenv').config();

router.get('/', (req, res) => {
  response.success(req, res, message, 200);
});

module.exports = router;

const message = [
  {
    user: `http://localhost:${process.env.PORT}/api/users`,
    reviews: `http://localhost:${process.env.PORT}/api/reviews`,
    services: `http://localhost:${process.env.PORT}/api/services`,
  },
];
