const mysql = require('mysql');
require('dotenv').config();
const debug = require('debug')('app:database');


const dbconf = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	dbPort: process.env.DB_PORT
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
		connection.query(
			`SELECT * FROM ${table}`,
			(err, data) => {
				if (err) return reject(err);
				resolve(data);
			}
		);
	});
};

const get = (table, id) => {
	return new Promise((resolve, reject) => {
		connection.query(
			`SELECT * FROM ${table} WHERE id = ${id}`,
			(err, data) => {
				if (err) return reject(err);
				resolve(data);
			}
		);
	});
};

function insert(table, data) {
	return new Promise((resolve, reject) => {
		connection.query(
			`INSERT INTO gasolineras.${table} SET ?`,
			data,
			(err, result) => {
				if (err) return reject(err);
				resolve(result);
			}
		);
	});
}

function update(table, data) {
	return new Promise((resolve, reject) => {
		connection.query(
			`UPDATE gasolineras.${table} SET ? WHERE id=?`,
			[data, data.id],
			(err, result) => {
				if (err) return reject(err);
				resolve(result);
			}
		);
	});
}

function upsert(table, data) {
	if (data && data.id) {
		return update(table, data);
	} else {
		return insert(table, data);
	}
}

function remove(table, id) {
	return new Promise((resolve, reject) => {
		connection.query(
			`DELETE FROM gasolineras.${table} WHERE id = ${id}`,
			(err, result) => {
				if (err) {
					return reject(err);
				}
				resolve(result);
			}
		);
	});
}

function query(table, query) {
	return new Promise((resolve, reject) => {
		connection.query(
			`SELECT * FROM ${table} WHERE ?`,
			query,
			(err, res) => {
				if (err) return reject(err);
				resolve(res[0] || null);
			}
		);
	});
}

module.exports = {
	list,
	get,
	upsert,
	remove,
	query,
};
