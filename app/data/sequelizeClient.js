const { Sequelize } = require('sequelize');
require('dotenv').config();

// Option 1: Passing a connection URI
const sequelize = new Sequelize(process.env.DB_URL, {
    // ! l'option dialect est obligatoire
    dialect: 'postgres',
});

module.exports = sequelize;
