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
      handleCon()
    }
  });
}

handleCon();

const list = (table) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${table} WHERE NUM_STATUS>0`,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      }
    );
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

const listJoinByForeinKey = (table1, table2, columTable2) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT ${table1}.*,${table2}.*
      FROM ${table1}
      INNER JOIN ${table2} ON ${table1}.ID=${table2}.${columTable2};`,
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

const getByCustomId = (table, id, colum) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${table} WHERE ${colum} = ${id}`,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      }
    );
  });
};

function insert(table, data) {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
      if (err) return reject(err);
      if (metadata != undefined) {
        let idusuario = result.insertId;
        metadata.ID_USUARIO = idusuario;
        connection.query(
          `INSERT INTO USER_META SET ?`,
          metadata,
          (err, res) => {
            if (err) return reject(err);
            resolve(res);
          }
        );
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
        if (metadata != undefined) {
          let idusuario = data.ID;
          connection.query(
            `UPDATE USER_META SET ? WHERE ID_USER=${idusuario}`,
            metadata,
            (err, res) => {
              if (err) return reject(err);
              resolve(res);
            }
          );
        } else {
          resolve(result);
        }
      }
    );
  });
}

const remove = (table, id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE ${table} SET NUM_STATUS=0 WHERE id = ${id}`,
      (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      }
    );
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
  listJoinByForeinKey,
  getByCustomId,
};
