'use strict'

const mysql = require('mysql2/promise');
const Sequelize = require('sequelize');
const dbConfig = require("config").get('DB');


const init = async () => {
  const conn =  await mysql.createConnection({host: dbConfig.HOST, port: 3306, user: 'root', password: 'Sat61sys'});
  await conn.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.DATABASE}\`;`);
  await conn.query(`CREATE USER IF NOT EXISTS '${dbConfig.USER}'@'${dbConfig.HOST}' IDENTIFIED BY '${dbConfig.PASSWORD}';`);
  await conn.query(`GRANT ALL ON *.* TO '${dbConfig.USER}'@'${dbConfig.HOST}';`)
  await conn.end();
}

init();

const SequelizeInstance = new Sequelize(dbConfig.DATABASE,dbConfig.USER,dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "mysql",
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  operatorsAliases: false
})
module.exports = {SequelizeInstance, Sequelize};