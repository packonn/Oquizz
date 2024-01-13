const { Quiz } = require('../models');

const quizController = {
    async show(req, res, next) {
        // ! on a validé le req.params.id avant d'arriver ici (middleware)
        const id = req.params.id;
        if (!req.session.token) {
            return res.redirect('/login');
        }
        const quiz = await Quiz.findByPk(id, {
            include: [
                { association: 'author' },
                { association: 'tags' },
                { association: 'questions', include: ['level', 'answers'] },
            ],
        });

        if (!quiz) {
            // * le middleware suivant est le 404
            return next();
        }

        res.render('quiz', { quiz, token: req.session.token });
    },
};

module.exports = quizController;
