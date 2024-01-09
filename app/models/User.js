const { Model, DataTypes, literal } = require('sequelize');
const getConnexion = require('../database/sequelizeClient');

class User extends Model {}

User.init(
    // * Le premier objet est la définition du modèle
    {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },

        firstname: { type: DataTypes.TEXT },
        lastname: { type: DataTypes.TEXT },
        email: { type: DataTypes.TEXT, allowNull: false },
        password: { type: DataTypes.TEXT, allowNull: false },
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
    // * Le deuxième objet est la configuration du modèle (métadonnées, connexion à la BDD etc)
    {
        // * Obligatoire pour chaque modèle
        sequelize: getConnexion(),
        tableName: 'user',
        modelName: `User`,
    }
);

module.exports = User;
