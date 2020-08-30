const TABLA = 'USUARIOS';
const TABLAMETA = 'META_USUARIOS';

module.exports = (injectedStore) => {
  let store = injectedStore;

  if (!store) {
    store = require('../../../store/dummy');
  }

  const list = () => {
    return store.list(TABLA);
  };

  const listRol = (rol) => {
    return store.listRol(TABLA, rol);
  };
  const listMetaData = (id) => {
    return store.listMetaData(TABLAMETA, id);
  };

  const get = (id) => {
    return store.get(TABLA, id);
  };

  const insert = async (body) => {
    const user = {
      ID_ROL: body.ID_ROL,
      DES_NOMBRE: body.DES_NOMBRE,
      FECHA_NACIMIENTO: body.FECHA_NACIMIENTO,
      DES_URL_IMAGEN: body.DES_URL_IMAGEN,
      DES_USUARIO: body.DES_USUARIO,
      DES_PASSWORD: body.DES_PASSWORD,
      DES_DOMICILIO: body.DES_DOMICILIO,
      DES_DOMICILIO_LATLONG: body.DES_DOMICILIO_LATLONG,
      NUM_TELEFONO: body.NUM_TELEFONO,
      DES_CORREO: body.DES_CORREO,
      NUM_STATUS: body.NUM_STATUS,
    };
    if (body.ID_ROL==2) {
      const userMeta = {};
      userMeta.DES_DATA_ESTUDIOS= body.DES_DATA_ESTUDIOS;
      userMeta.DES_DATA_ESPECIALIDADES= body.DES_DATA_ESPECIALIDADES;
      userMeta.DES_DATA_HABILIDADES= body.DES_DATA_HABILIDADES;
      userMeta.DES_DATA_EXPERIENCIA= body.DES_DATA_EXPERIENCIA;
      userMeta.DES_DATA_DISPONIBILIDAD= body.DES_DATA_DISPONIBILIDAD;
      userMeta.DES_DATA_TIEMPO_SERVICIOS= body.DES_DATA_TIEMPO_SERVICIOS;
      userMeta.NUM_TARIFA_HORA= body.NUM_TARIFA_HORA;
      return store.insert(TABLA, user,userMeta);
    }else{
      return store.insert(TABLA, user);
    }

    
  };

  const update = async (body) => {
    const user = {
      ID: body.ID,
      ID_ROL: body.ID_ROL,
      DES_NOMBRE: body.DES_NOMBRE,
      FECHA_NACIMIENTO: body.FECHA_NACIMIENTO,
      DES_URL_IMAGEN: body.DES_URL_IMAGEN,
      DES_USUARIO: body.DES_USUARIO,
      DES_PASSWORD: body.DES_PASSWORD,
      DES_DOMICILIO: body.DES_DOMICILIO,
      DES_DOMICILIO_LATLONG: body.DES_DOMICILIO_LATLONG,
      NUM_TELEFONO: body.NUM_TELEFONO,
      DES_CORREO: body.DES_CORREO,
      NUM_STATUS: body.NUM_STATUS,
    };
    if (body.ID_ROL==2) {
      const userMeta = {};
      userMeta.DES_DATA_ESTUDIOS= body.DES_DATA_ESTUDIOS;
      userMeta.DES_DATA_ESPECIALIDADES= body.DES_DATA_ESPECIALIDADES;
      userMeta.DES_DATA_HABILIDADES= body.DES_DATA_HABILIDADES;
      userMeta.DES_DATA_EXPERIENCIA= body.DES_DATA_EXPERIENCIA;
      userMeta.DES_DATA_DISPONIBILIDAD= body.DES_DATA_DISPONIBILIDAD;
      userMeta.DES_DATA_TIEMPO_SERVICIOS= body.DES_DATA_TIEMPO_SERVICIOS;
      userMeta.NUM_TARIFA_HORA= body.NUM_TARIFA_HORA;
      return store.update(TABLA, user,userMeta);
    }else{
      return store.update(TABLA, user);
    }
    
  };

  const remove = async (id) => {
    return await store.remove(TABLA, id);
  };

  return {
    list,
    get,
    insert,
    update,
    remove,
    listRol,
    listMetaData
  };
};
