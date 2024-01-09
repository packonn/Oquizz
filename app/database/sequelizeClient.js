require('dotenv').config();
const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
// function getConnexion() {
//     return new Sequelize(process.env.DB_URL, {
//         // ! l'option dialect est obligatoire
//         define: {
//             createdAt: 'created_at',
//             updatedAt: 'updated_at',
//         },
//         dialect: 'postgres',
//         logging: false,
//     });
// }

// Option 2: Passing a a list of infos
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
