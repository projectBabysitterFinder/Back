const mysql = require('mysql');
require('dotenv').config();
const debug = require('debug')('app:database');

const dbconf = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
};

let connection;

function handleCon() {
  connection = mysql.createConnection(dbconf);

  connection.connect((err) => {
    if (err) {
      console.error('[db err]', err);
      setTimeout(handleCon, 2000);
    } else {
      debug('DB Connected!');
    }
  });

  connection.on('error', (err) => {
    console.error('[db err]', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleCon();
    } else {
      throw err;
    }
  });
}

handleCon();

const list = (table) => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

const listRol = (table, rol) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${table} WHERE ID_ROL = ${rol}`,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      }
    );
  });
};

const listMetaData = (table, id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT USUARIOS.*,META_USUARIOS.*
      FROM USUARIOS,META_USUARIOS where USUARIOS.ID_ROL=${id} and META_USUARIOS.ID_usuario=USUARIOS.ID;`,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      }
    );
  });
};

const get = (table, id) => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} WHERE id = ${id}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

function insert(table, data, metadata) {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
      if (err) return reject(err);
      if (metadata!=undefined) {
        let idusuario=result.insertId;
        metadata.ID_USUARIO=idusuario;
        connection.query(`INSERT INTO META_USUARIOS SET ?`,metadata,(err,res) => {
          if (err) return reject(err);
          resolve(res);
        })
      } else {
        resolve(result);
      }
      
    });
  });
}

function update(table, data, metadata) {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE ${table} SET ? WHERE id=?`,
      [data, data.ID],
      (err, result) => {
        if (err) return reject(err);
        if (metadata!=undefined) {
          let idusuario=data.ID;
        connection.query(`UPDATE META_USUARIOS SET ? WHERE ID_USUARIO=${idusuario}`,metadata,(err,res) => {
          if (err) return reject(err);
          resolve(res);
        })
        } else {
          resolve(result);
        }
        
      }
    );
  });
}

const remove = (table, id) => {
  return new Promise((resolve, reject) => {
    connection.query(`DELETE FROM ${table} WHERE id = ${id}`, (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

const query = (table, query) => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} WHERE ?`, query, (err, res) => {
      if (err) return reject(err);
      resolve(res[0] || null);
    });
  });
};

module.exports = {
  list,
  get,
  insert,
  update,
  remove,
  query,
  listRol,
  listMetaData
};
