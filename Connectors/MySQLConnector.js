'use strict'

const mysql = require('mysql2/promise');
const Sequelize = require('sequelize');
const dbConfig = require("config").get('DB');


const init = async () => {
  try{
    const conn =  await mysql.createConnection({host: dbConfig.HOST, port: 3306, user: dbConfig.USER, password: dbConfig.PASSWORD});
    await conn.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.DATABASE}\`;`);
    await conn.end();
  }
  catch(err){
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log(err)
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  }
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
  operatorsAliases: false,
  logging: false
})
module.exports = {SequelizeInstance, Sequelize};