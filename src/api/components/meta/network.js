const express = require('express');
const response = require('../../../network/response');
const router = express.Router();
const controller = require('./index');

const list = (req, res, next) => {
  controller
    .list()
    .then((list) => {
      let listFinal = list;
        for (let x = 0; x < listFinal.length; x++) {
          listFinal[x].DES_DATA_STUDIES = JSON.parse(
            listFinal[x].DES_DATA_STUDIES
          );
          listFinal[x].DES_DATA_SPECIALTIES = JSON.parse(
            listFinal[x].DES_DATA_SPECIALTIES
          );
          listFinal[x].DES_DATA_ABILITIES = JSON.parse(
            listFinal[x].DES_DATA_ABILITIES
          );
          listFinal[x].DES_DATA_EXPERIECE = JSON.parse(
            listFinal[x].DES_DATA_EXPERIECE
          );
          listFinal[x].DES_DATA_SERVICE_TIME = JSON.parse(
            listFinal[x].DES_DATA_SERVICE_TIME
          );
        }
      response.success(req, res, listFinal, 200);
    })
    .catch(next);
};

const get = (req, res, next) => {
  controller
    .get(req.params.id)
    .then((get) => {
      let listFinal = get;
        for (let x = 0; x < listFinal.length; x++) {
          listFinal[x].DES_DATA_STUDIES = JSON.parse(
            listFinal[x].DES_DATA_STUDIES
          );
          listFinal[x].DES_DATA_SPECIALTIES = JSON.parse(
            listFinal[x].DES_DATA_SPECIALTIES
          );
          listFinal[x].DES_DATA_ABILITIES = JSON.parse(
            listFinal[x].DES_DATA_ABILITIES
          );
          listFinal[x].DES_DATA_EXPERIECE = JSON.parse(
            listFinal[x].DES_DATA_EXPERIECE
          );
          listFinal[x].DES_DATA_SERVICE_TIME = JSON.parse(
            listFinal[x].DES_DATA_SERVICE_TIME
          );
        }
      response.success(req, res, listFinal, 200);
    })
    .catch(next);
};

router.get('/', list);
router.get('/:id', get);

module.exports = router;
