const Question = require('../models/question');
const Level = require('../models/level');
const questionController = {
    async index(req, res) {
        const questions = await Question.findAll({
            order: ['id'],
            include: Level,
        });
        console.log(questions[0].Level.name);
        res.render('questions', {
            questions,
        });
    },
    async show(req, res) {
        const { id } = req.params;
        const question = await Question.findByPk(id);
        const level = await Level.findByPk(question.level_id);
        res.render('question', {
            question,
            level,
        });
    },
    async update(req, res) {
        const { id } = req.params;
        const { description } = req.body;
        const question = await Question.findByPk(id);
        question.update({
            description: description,
        });

        res.redirect(`/question/${id}`);
    },
    async destroy(req, res) {
        const { id } = req.params;
        const question = await Question.findByPk(id);
        question.destroy();
        res.redirect('/questions');
    },
};
module.exports = questionController;
