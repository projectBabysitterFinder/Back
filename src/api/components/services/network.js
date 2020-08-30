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
    .then((services) => {
      response.success(req, res, services, 200);
    })
    .catch(next);
};

const insert = (req, res, next) => {
  controller
    .insert(req.body)
    .then((services) => {
      response.success(req, res, services, 201);
    })
    .catch(next);
};

const update = (req, res, next) => {
  controller
    .update(req.body)
    .then((services) => {
      response.success(req, res, services, 201);
    })
    .catch(next);
};


router.get('/', list);
router.get('/:id', get);
router.post('/', insert);
router.put('/', update);

module.exports = router;
