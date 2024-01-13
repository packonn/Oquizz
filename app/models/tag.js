const { Model, DataTypes } = require('sequelize');
const getConnexion = require('../database/sequelizeClient');

class Tag extends Model {}

Tag.init(
    {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'tag',
        modelName: 'Tag',
    }
);

module.exports = Tag;
