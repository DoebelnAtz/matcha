const pg = require("pg");
const dbConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
};
console.log(dbConfig);
const pool = new pg.Pool(dbConfig);

const client = new pg.Client(dbConfig);
client.connect(function (err) {
  if (err) {
    return console.error("failed connecting to postgres", err);
  }
  client.query('SELECT NOW() AS "time"', function (err, result) {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows[0].time);
    client.end();
  });
});

exports.query = async (text, params) => {
  return pool.query(text, params);
};

exports.connect = () => pool.connect();
