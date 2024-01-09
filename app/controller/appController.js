const User = require('../models/user');

const appController = {
    async index(req, res) {
        const users = await User.findAll();
        const user = await User.findByPk(1);

        console.log(user);
        res.render(`index`, { users });
    },
};

module.exports = appController;
