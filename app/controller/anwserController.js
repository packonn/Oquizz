const Answer = require('../models/answer');

const anwserController = {
    async index(req, res) {
        const answers = await Answer.findAll({ order: ['id'] });
        res.render('answers', {
            answers,
        });
    },
    async show(req, res) {
        const { id } = req.params;
        const answer = await Answer.findByPk(id);
        console.log(answer.description);
        res.render('answer', {
            answer,
        });
    },
    async update(req, res) {
        const { id } = req.params;
        const { description } = req.body;
        const answer = await Answer.findByPk(id);
        answer.update({
            description: description,
        });

        res.redirect(`/answers/${id}`);
    },
    async destroy(req, res) {
        const { id } = req.params;
        const anwser = await Answer.findByPk(id);
        anwser.destroy();
        res.redirect('/answers');
    },
};
module.exports = anwserController;
