const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const { config } = require('../../config');
const { User } = require('../models');

const authController = {

    async registerForm(req, res) {
        let errors = null;

        if(req.session.errors) {
            errors = req.session.errors;
        }

        res.render('signup', { errors,token:req.session.token });
    },

    async register(req, res) {
        const errors = [];
        // ! avant ça : il y a plusieurs middlewares
        // * 1. pour valider la longueur des champs mot de passe
        // * 2. pour valider l'email
        const { firstname, lastname, email, password, password_confirm } =
            req.body;

        if (!emailValidator.validate(email)) {
            errors.push({
                type: 'email',
                message: 'Email invalide',
                value: email
            });
            // throw new Error('Email invalide');
        }

        const exists = await User.findOne({
            where: { email }
        });

        // * Merci à JB de nous avoir fait penser à vérifier si email est déjà en BDD
        if(exists) {
            errors.push({
                type: 'email',
                message: "Veuillez vérifier les mots de passe ou l'email",
                value: email
            });
            // throw new Error("Veuillez vérifier les mots de passe ou l'email");
        }

        if (password !== password_confirm) {
            errors.push({
                type: 'password',
                message: "Veuillez vérifier les mots de passe ou l'email",
                value: password + ' ' + password_confirm
            });
            // throw new Error("Veuillez vérifier les mots de passe ou l'email");
        }

        // * config.password.length
        if (password.length < config.password.length) {
            errors.push({
                type: 'password',
                message: "Veuillez vérifier les mots de passe ou l'email",
                value: password
            });
            // throw new Error("Veuillez vérifier les mots de passe ou l'email");
        }

        if(errors.length) {
            req.session['errors'] = errors;

            return res.redirect('/register');
        }

        // * Concept de sel : le sel sert à durcir le mot de passe, c'est une string aléatoire avec laquelle on hash le mot de passe
        // * l'argument 12  sert à dire à bcryprt combien de tour de chiffrage subira la string aléatoire
        // * 12 est le défaut acceptable : un bon compromise entre la dureté du chiffrage et les performances
        const salt = await bcrypt.genSalt(config.password.saltRound);
        // console.log(salt); === $2b$12$ymxXtf73CVALuMM99d1sYe
        const hash = await bcrypt.hash(password, salt);
        // console.log(hash); === $2b$12$ymxXtf73CVALuMM99d1sYeLynOxIzT4V5s.3g.Wop/kdiPt0Iutl.

        await User.create({
            firstname,
            lastname,
            email,
            password: hash
        });

        res.redirect('/login');
    },
};

module.exports = authController;
