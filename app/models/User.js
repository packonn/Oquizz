const { Model, DataTypes, literal, Sequelize } = require('sequelize');
const getConnexion = require('../database/sequelizeClient');

class User extends Model {
    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}

User.init(
    // * Le premier objet est la définition du modèle
    {
        id: {
            // * On utilise Sequelize pour définir le type : c'est un autre possibilité
            type: Sequelize.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },

        firstname: {
            type: DataTypes.TEXT,
            validate: {
                len: [2, 255],
            },
        },

        lastname: {
            type: DataTypes.TEXT,
            validate: {
                len: [2, 255],
            },
        },

        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },

        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            // * Les jurés vont vérifier si vos mots de passe sont suffisament sécurisés
            validate: {
                len: [10, 255],
            },
        },

        created_at: {
            type: DataTypes.DATE,
            // * literal sert à dire à la BDD que l'on veut utiliser la fonction CURRENT_TIMESTAMP ou (SELECT NOW())
            // * Si on ne met pas literal, sequelize tentera d'insérer la string 'CURRENT_TIMESTAMP'
            defaultValue: literal('CURRENT_TIMESTAMP'),
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
        // * On doit fournir au modèle une instance de sequelize pour qu'il sache comment se connecter à la BDD
        sequelize: getConnexion(),
        // * On fournit le nom de la table sur laquelle on travaille, sinon sequelize utilise le nom de la classe.
        tableName: 'user',
        // * On ancre le nom du modèle : sequelize pourra s'en servir quand on fait dfes associations.
        modelName: 'User',
    }
);

module.exports = User;
