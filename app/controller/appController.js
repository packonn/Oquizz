const Level = require('../models/level');

const appController = {
    async index(req, res) {
        const levels = await Level.findAll();

        res.render(`index`, { levels });
    },
};

module.exports = appController;
