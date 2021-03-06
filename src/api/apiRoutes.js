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
    docs: `https://babys-api.herokuapp.com/api-docs`,
    user: `https://babys-api.herokuapp.com/api/users`,
    reviews: `https://babys-api.herokuapp.com/api/reviews`,
    services: `https://babys-api.herokuapp.com/api/services`,
    meta: `https://babys-api.herokuapp.com/api/meta`,
    availability: `https://babys-api.herokuapp.com/api/availability`,
  },
];
