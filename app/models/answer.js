const { Model, DataTypes } = require('sequelize');
const getConnexion = require('../database/sequelizeClient');

class Answer extends Model {}

Answer.init(
    {
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        question_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'answer',
        modelName: 'Answer',
    }
);

module.exports = Answer;
