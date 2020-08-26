const express = require('express');
const response = require('../../../network/response');
const router = express.Router();
const controller = require('./index');

const list = (req, res, next) => {
  controller
    .join()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch(next);
};

const get = (req, res, next) => {
  controller
    .joinId(req.params.id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch(next);
};

router.get('/', list);
router.get('/:id', get);


module.exports = router;
