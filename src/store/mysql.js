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
      `SELECT * FROM ${table}`,
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

const listJoinByForeinKey = (table1,columTable1, table2, columTable2,table3, columTable3) => {
  return new Promise((resolve, reject) => {
    let consulta=`SELECT ${table2}.*,${table1}.*`+((table3!=undefined && columTable3!=undefined) ? (','+table3+'.* '):'')+
    `FROM ${table2},${table1}`+((table3!=undefined && columTable3!=undefined) ? `,${table3} `:'')+`
    WHERE ${table1}.${columTable1}=${table2}.${columTable2} `
    +((table3!=undefined && columTable3!=undefined) ? ` AND ${table3}.${columTable3}=${table2}.${columTable3} `:'');
    connection.query(
      consulta,
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

const getUser = (table, id) => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} WHERE `+((!isNaN(parseFloat(id)) && isFinite(id)) ? `ID`:`DES_EMAIL`)+` = '${id}'`, (err, data) => {
      if (err) return reject(err);
      if (data[0].ID_ROL==2) {
        connection.query(
          `SELECT AVAILABILITY.*,USER_META.*,${table}.*
          FROM USER_META
          INNER JOIN ${table} ON ${table}.ID=${data[0].ID} AND (${table}.ID=USER_META.ID_USER) 
          INNER JOIN AVAILABILITY ON AVAILABILITY.ID_AVAILABILITY=USER_META.ID_AVAILABILITY ;`,
          (err, data2) => {
            if (err) return reject(err);
            resolve(data2);
          }
        );
      } else {
        resolve(data);
      }
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

function insert(table, data,meta,metatable) {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
      if (err) return reject(err);
        if (meta!=undefined) {
          meta.ID_USER=result.insertId;
          connection.query(`INSERT INTO ${metatable} SET ?`, meta, (err, resultado) => {
            if (err) return reject(err);
                resolve(result);
          });
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
  getUser,
};
