const { Tag } = require('../models');

const tagController = {
    async index(req, res) {
        const tags = await Tag.findAll({
            include: 'quizList',
        });

        res.render('tags', { tags, token: req.session.token });
    },

    async show(req, res, next) {
        const tagId = Number(req.params.id);
        if (!req.session.token) {
            return res.redirect('/login');
        }
        const tag = await Tag.findByPk(tagId, {
            include: { association: 'quizList', include: ['author', 'tags'] },
        });

        if (!tag) {
            // * le middleware suivant est le 404
            return next();
        }

        res.render('index', {
            tag,
            quizzes: tag.quizList,
            token: req.session.token,
        });
    },
};

module.exports = tagController;
