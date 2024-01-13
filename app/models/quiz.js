const { Model, DataTypes } = require('sequelize');
const getConnexion = require('../database/sequelizeClient');

class Quiz extends Model {}

Quiz.init(
    {
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        description: {
            type: DataTypes.TEXT,
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'quiz',
        modelName: 'Quiz',
    }
);

module.exports = Quiz;
