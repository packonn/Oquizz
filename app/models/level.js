const { Model, DataTypes } = require('sequelize');
const getConnexion = require('../database/sequelizeClient');

class Level extends Model {}

Level.init(
    {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize: getConnexion(),
        // * Si on ne précise pas le nom de la table, sequelize va produire un nom au pluriel et avec une majuscule en se basant sur le nom du modèle (Levels)
        tableName: 'level',
        modelName: 'Level',
    }
);

module.exports = Level;
