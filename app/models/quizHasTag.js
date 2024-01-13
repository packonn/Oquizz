const { Model, DataTypes } = require('sequelize');
const getConnexion = require('../database/sequelizeClient');

class QuizHasTag extends Model {}

QuizHasTag.init(
    {
        quiz_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        tag_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'quiz_has_tag',
        modelName: 'QuizHasTag',
    }
);

module.exports = QuizHasTag;
