const { Model, DataTypes, literal } = require('sequelize');
const getConnexion = require('../database/sequelizeClient');
const Level = require('./level'); // Import the Level model

class Question extends Model {}

Question.init(
    {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        question: { type: DataTypes.TEXT },
        description: { type: DataTypes.TEXT },
        anecdote: { type: DataTypes.TEXT },
        wiki: { type: DataTypes.TEXT },
        level_id: {
            // Define the foreign key
            type: DataTypes.INTEGER,
            references: {
                model: Level,
                key: 'id',
            },
        },
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
        tableName: 'question',
        modelName: `Question`,
    }
);

Question.belongsTo(Level, { foreignKey: 'level_id' });

module.exports = Question;
