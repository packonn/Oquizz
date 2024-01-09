const { Model, DataTypes } = require('sequelize');
const getConnexion = require('../database/sequelizeClient');

class Level extends Model {}
Level.init(
    {
        name: { type: DataTypes.TEXT, allowNull: false },
    },
    {
        sequelize: getConnexion(),
        tableName: 'level',
        modelName: `Level`,
    }
);
module.exports = Level;
