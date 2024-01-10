const { Model, DataTypes, literal } = require('sequelize');
const getConnexion = require('../database/sequelizeClient');

class Answer extends Model {}

Answer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        description: { type: DataTypes.TEXT },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: literal(`CURRENT_TIMESSTAMP`),
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'answer',
        modelName: `Answer`,
    }
);

module.exports = Answer;
