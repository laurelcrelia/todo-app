const { Pool } = require("pg")
require("dotenv").config()

const pool = new Pool({
	user : process.env.DATABASE_USERNAME,
	password: process.env.PASSWORD,
	host: process.env.HOST,
	port: process.env.DATABASE_PORT,
	database: "todoapp"
});

module.exports = pool;