const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_user',      // change to your Postgres username
  host: 'localhost',
  database: 'your_db',    // change to your database name
  password: 'your_password', // change to your password
  port: 5432,
});

module.exports = pool;