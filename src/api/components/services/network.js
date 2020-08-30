const express = require('express');
const response = require('../../../network/response');
const router = express.Router();
const controller = require('./index');

const list = (req, res, next) => {
  controller
    .list()
    .then((list) => {
      let servicesFinal=list;
      for (let x = 0; x < servicesFinal.length; x++) {
        servicesFinal[x].DES_DATA_BOYS=JSON.parse(servicesFinal[x].DES_DATA_BOYS);
        servicesFinal[x].DES_DATA_HOURS=JSON.parse(servicesFinal[x].DES_DATA_HOURS);
      }
      response.success(req, res, servicesFinal, 200);
    })
    .catch(next);
};

const get = (req, res, next) => {
  controller
    .get(req.params.id)
    .then((services) => {
      let servicesFinal=services;
      for (let x = 0; x < servicesFinal.length; x++) {
        servicesFinal[x].DES_DATA_BOYS=JSON.parse(servicesFinal[x].DES_DATA_BOYS);
        servicesFinal[x].DES_DATA_HOURS=JSON.parse(servicesFinal[x].DES_DATA_HOURS);
      }
      response.success(req, res, servicesFinal, 200);
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
