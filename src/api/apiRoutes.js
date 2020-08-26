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
        join_personal_info_location: 'http://localhost:3000/api/allDataBabysitter',
        join_personal_info_skill: 'http://localhost:3000/api/babysitterSkill',
        join_personal_info_experience: 'http://localhost:3000/api/babysitterExperience',
      },
    ],
    user: [
      {
        personal_info: 'http://localhost:3000/api/user',
        location: 'http://localhost:3000/api/location_user',
        join: 'http://localhost:3000/api/allDataUser',
      },
    ],
    services: [
      {
        services: 'http://localhost:3000/api/services',
        city: 'http://localhost:3000/api/city',
        children: 'http://localhost:3000/api/children',
        cost: 'http://localhost:3000/api/cost',
      },
    ],
  },
];
