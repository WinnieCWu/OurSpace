// import the sequelize package
const Sequelize = require('sequelize');

// product environment variables
require('dotenv').config();

// create the connection to the database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.USER, process.env.PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;