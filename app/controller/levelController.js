const Level = require('../models/level');

const levelController = {
    async index(req, res) {
        const levels = await Level.findAll({ order: ['id'] });
        res.render('levels', {
            levels,
        });
    },

    async show(req, res) {
        const { id } = req.params;
        const level = await Level.findByPk(id);
        res.render('level', {
            level,
        });
    },

    async create(req, res) {
        const { name } = req.body;

        await Level.create({
            name: name,
        });

        res.redirect('/levels');
    },

    async update(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        const level = await Level.findByPk(id);
        level.update({
            name: name,
        });
        res.redirect(`/levels/${id}`);
    },

    async destroy(req, res) {
        const { id } = req.params;
        const level = await Level.findByPk(id);
        level.destroy();
        res.redirect('/levels');
    },
};
module.exports = levelController;
