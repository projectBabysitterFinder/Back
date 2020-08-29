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

const listRol = (req, res, next) => {
  controller
    .listRol(req.params.ID_ROL)
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

const remove = (req, res, next) => {
  controller
    .remove(req.params.id)
    .then((user) => {
      response.success(req, res, user, 201);
    })
    .catch(next);
};

router.get('/', list);
router.get('/:ID_ROL', listRol);
router.get('/user/:id', get);
router.post('/', insert);
router.put('/', update);
router.delete('/:id', remove);

module.exports = router;
