require('dotenv').config();
const { Sequelize } = require('sequelize');

function getConnexion() {
    return new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USERNAME,
        process.env.DB_PASSWORD,
        {
            // ! l'option dialect est obligatoire
            define: {
                createdAt: 'created_at',
                updatedAt: 'updated_at',
            },
            host: 'localhost',
            dialect: 'postgres',
            logging: false,
        }
    );
}

module.exports = getConnexion;
