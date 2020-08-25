const express = require('express');
const response = require('../network/response');
const router = express.Router();

router.get('/', (req, res) => {
  response.success(req, res, message, 200);
});

module.exports = router;

const message = [
  {
    babysitter: [
      {
        personal_info: 'http://localhost:3000/api/babysitter',
        location: 'http://localhost:3000/api/location_babysitter',
        skill: 'http://localhost:3000/api/skill',
        experience: 'http://localhost:3000/api/experience',
      },
    ],
    user: [
      {
        personal_info: 'http://localhost:3000/api/user',
        location: 'http://localhost:3000/api/location_user',
      },
    ],
    services: 'http://localhost:3000/api/services',
    city: 'http://localhost:3000/api/city',
  },
];
