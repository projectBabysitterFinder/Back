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
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch(next);
};

const insert = (req, res, next) => {
  controller
    .insert(req.body)
    .then((user) => {
      response.success(req, res, user, 201);
    })
    .catch(next);
};

const update = (req, res, next) => {
  controller
    .update(req.body)
    .then((user) => {
      response.success(req, res, user, 201);
    })
    .catch(next);
};


router.get('/', list);
router.get('/byUser/:id', get);
router.post('/', insert);
router.put('/', update);

module.exports = router;
