const { Quiz } = require('../models');
// const Quiz = require('../models/quiz');

const appController = {
    async index(req, res) {
        const quizzes = await Quiz.findAll({
            // ! On a fait des alias dans les associations, on est donc opbligé de les utiliser par sequelize.
            include: ['author', 'tags'],
        });

        res.render(`index`, { quizzes, token: req.session.token });
    },
};

module.exports = appController;
