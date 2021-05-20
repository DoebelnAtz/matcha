const pg = require('pg');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname + '/../.env') });

let dbConfig = {};

if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'setup') {
	dbConfig = {
		user: process.env.T_DB_USER,
		host: process.env.T_DB_HOST,
		database: process.env.T_DB_DATABASE,
		password: process.env.T_DB_PASSWORD,
	};
} else {
	dbConfig = {
		user: process.env.DB_USER,
		host: process.env.DB_HOST,
		database: process.env.DB_DATABASE,
		password: process.env.DB_PASSWORD,
	};
}

const pool = new pg.Pool(dbConfig);

const client = new pg.Client(dbConfig);
client
	.connect()
	.then((client) => {
		client.query('SELECT NOW() AS "time"').then((res) => {
			console.log(res.rows[0].time);
		});
	})
	.catch((e) => {})
	.finally(() => {
		client.end();
	});
exports.query = async (text, params) => {
	return pool.query(text, params);
};

exports.connect = () => pool.connect();
