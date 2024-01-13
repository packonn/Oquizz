const { User } = require('../models');
const bcrypt = require('bcrypt');
const sessionController = {
    async loginForm(req, res) {
        res.render('login');
    },
    async login(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw new Error('verifier votre mot de passe ou votre email');
        }
        const passwordUser = user.dataValues.password;
        const match = await bcrypt.compare(password, passwordUser);
        if (!match) {
            throw new Error('verifier votre mot de passe ou votre email');
        } else {
            req.session.token = true;
            res.redirect('/');
        }
    },
    async disconnect(req, res) {
        req.session.token = false;
        res.redirect('/');
    },
};

module.exports = sessionController;
