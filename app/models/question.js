const { Model, DataTypes } = require('sequelize');
const getConnexion = require('../database/sequelizeClient');

class Question extends Model {}

Question.init(
    {
        question: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        description: {
            type: DataTypes.TEXT,
            // * Si on souhaite un varchar avec un longueur max, ce n'est pas compatible avec postgres : il faudra enlever le nombre de caractères
            // test: DataTypes.STRING(64),
        },

        anecdote: {
            type: DataTypes.TEXT,
        },

        wiki: {
            type: DataTypes.TEXT,
        },

        level_id: {
            type: DataTypes.INTEGER,
        },

        quiz_id: {
            type: DataTypes.INTEGER,
        },

        answer_id: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'question',
        modelName: 'Question',
    }
);

module.exports = Question;
