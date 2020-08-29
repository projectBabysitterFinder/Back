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
      if (req.params.ID_ROL==2) {
        for (let x = 0; x < list.length; x++) {
          controller.listMetaData(list[x].ID).then((data) => {
            list[x].META_USUARIO=data;
            if (list[x].META_USUARIO.length>0) {
              list[x].META_USUARIO[0].DES_DATA_ESTUDIOS=JSON.parse(list[x].META_USUARIO[0].DES_DATA_ESTUDIOS);
              list[x].META_USUARIO[0].DES_DATA_ESPECIALIDADES=JSON.parse(list[x].META_USUARIO[0].DES_DATA_ESPECIALIDADES);
              list[x].META_USUARIO[0].DES_DATA_HABILIDADES=JSON.parse(list[x].META_USUARIO[0].DES_DATA_HABILIDADES);
              list[x].META_USUARIO[0].DES_DATA_EXPERIENCIA=JSON.parse(list[x].META_USUARIO[0].DES_DATA_EXPERIENCIA);
              list[x].META_USUARIO[0].DES_DATA_DISPONIBILIDAD=JSON.parse(list[x].META_USUARIO[0].DES_DATA_DISPONIBILIDAD);
            }
            response.success(req, res, list, 200);
          }).catch(next);
          
        }
      }else{
        response.success(req, res, list, 200);
      }
      
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
