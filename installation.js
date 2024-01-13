require('dotenv').config();

const { Sequelize } = require('sequelize');
// const QuizHasTag = require('./app/models/quizHasTag');
// const Question = require('./app/models/question');
// const Answer = require('./app/models/answer');
// const Level = require('./app/models/level');
// const User = require('./app/models/user');
// const Quiz = require('./app/models/quiz');
// const Tag = require('./app/models/tag');

const {
    Level,
    User,
    Quiz,
    Tag,
    QuizHasTag,
    Question,
    Answer,
} = require('./app/models');

// IIFE
(async () => {
    try {
        // * Avant de créer ces tables :  on a créé un user de BDD, on a créé une BDD
        // * on peut faire les étapes précédentes avec sequelize, il faut pouvor se connecter en tant que postgres à la BDD.
        const adminSequelize = new Sequelize(process.env.DB_ADMIN_URL, {
            dialect: 'postgres',
        });

        await adminSequelize.query(
            `DROP DATABASE IF EXISTS ${process.env.TEST_DB_NAME}`
        );

        // * Vérifier si l'utilisateur de la BDD existe
        const users = await adminSequelize.query(
            'SELECT * FROM pg_catalog.pg_user'
        );

        const user = users[0].find(
            user => user.usename === process.env.TEST_DB_USERNAME
        );

        if (!user) {
            await adminSequelize.query(
                `CREATE ROLE oquiz_test WITH LOGIN PASSWORD '${process.env.TEST_DB_PASSWORD}'`
            );
        }

        await adminSequelize.query(
            `CREATE DATABASE ${process.env.TEST_DB_NAME} OWNER ${process.env.TEST_DB_USERNAME}`
        );

        await adminSequelize.close();

        // Création simple de table si la table n'existe pas
        // await User.sync();

        await User.sync({ force: true });
        await Quiz.sync({ force: true });
        await Tag.sync({ force: true });
        await Level.sync({ force: true });
        await QuizHasTag.sync({ force: true });
        await Question.sync({ force: true });
        await Answer.sync({ force: true });
    } catch (error) {
        console.log(error);
    } finally {
        process.exit();
    }
})();
