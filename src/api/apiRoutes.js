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
    user: `https://babys-api.herokuapp.com/api/api/users`,
    reviews: `https://babys-api.herokuapp.com/api/api/reviews`,
    services: `https://babys-api.herokuapp.com/api/api/services`,
  },
];
