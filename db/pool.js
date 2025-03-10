const pkg = require("pg");
require("dotenv").config();
const { Pool } = pkg;

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
});

module.exports = pool;
