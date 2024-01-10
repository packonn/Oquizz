const User = require('../models/user');

const appController = {
    async index(req, res) {
        const users = await User.findAll();
        // const user = await User.findByPk(1);
        // const user_obj = {
        //     firstname: 'toto',
        //     lastname: 'lastname',
        //     email: 'toto@gmail.com',
        //     password: 'kjhnsdfùglknj,wsd,lpk*jkfdk,',
        // };

        // await User.create(user_obj);
        res.render(`index`, { users });
    },
};

module.exports = appController;
