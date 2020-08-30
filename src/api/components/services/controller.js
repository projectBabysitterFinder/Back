const TABLA = 'SERVICIOS';

module.exports = (injectedStore) => {
  let store = injectedStore;

  if (!store) {
    store = require('../../../store/dummy');
  }

  const list = () => {
    return store.list(TABLA);
  };

  const get = (id) => {
    return store.get(TABLA, id);
  };

  const insert = async (body) => {
    const services = {
      ID_USUARIO_CLIENTE: body.ID_USUARIO_CLIENTE,
      ID_USUARIO_NANA: body.ID_USUARIO_NANA,
      DES_DOMICILIO: body.DES_DOMICILIO,
      DES_DOMICILIO_LATLONG: body.DES_DOMICILIO_LATLONG,
      DES_RECOMENDACIONES: body.DES_RECOMENDACIONES,
      DES_DATA_INFANTES: body.DES_DATA_INFANTES,
      DES_DATA_HORARIO: body.DES_DATA_HORARIO,
      NUM_COSTO_TOTAL: body.NUM_COSTO_TOTAL,
      NUM_STATUS: body.NUM_STATUS,
    }
    return store.insert(TABLA, services);
  };

  const update = async (body) => {
    const services = {
      ID: body.ID,
      ID_USUARIO_CLIENTE: body.ID_USUARIO_CLIENTE,
      ID_USUARIO_NANA: body.ID_USUARIO_NANA,
      DES_DOMICILIO: body.DES_DOMICILIO,
      DES_DOMICILIO_LATLONG: body.DES_DOMICILIO_LATLONG,
      DES_RECOMENDACIONES: body.DES_RECOMENDACIONES,
      DES_DATA_INFANTES: body.DES_DATA_INFANTES,
      DES_DATA_HORARIO: body.DES_DATA_HORARIO,
      NUM_COSTO_TOTAL: body.NUM_COSTO_TOTAL,
      NUM_STATUS: body.NUM_STATUS,
    }
    return store.update(TABLA, services);
  };


  return {
    list,
    get,
    update,
    insert,
  };
};
