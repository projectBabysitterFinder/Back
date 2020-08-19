const express = require('express');
const secure = require('./secure');
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

const upsert = (req, res, next) => {
  controller
    .upsert(req.body)
    .then((user) => {
      response.success(req, res, user, 201);
    })
    .catch(next);
};

const remove = (req, res, next) => {
  controller
    .remove(req.params.id)
    .then((report) => {
      response.success(req, res, report, 201);
    })
    .catch(next);
};

router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/', secure('update'), upsert);
router.delete('/:id', remove);

module.exports = router;
