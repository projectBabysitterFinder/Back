const express = require('express');
const response = require('../../../network/response');
const router = express.Router();
const controller = require('./index');

const list = (req, res, next) => {
  controller
    .list()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch(next);
};

const get = (req, res, next) => {
  controller
    .get(req.params.id)
    .then((get) => {
      response.success(req, res, get, 200);
    })
    .catch(next);
};

router.get('/', list);
router.get('/:id', get);

module.exports = router;
