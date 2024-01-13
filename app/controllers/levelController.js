const Level = require('../models/level');

const levelController = {
    // RESTful API
    async index(req, res) {
        const options = {
            order: [['id', 'ASC'], 'name'],
        };

        const levels = await Level.findAll(options);

        // levage d'erreur pour tests de middleware
        // throw new Error("un truc horrible s'est produit");

        res.render('levels', { levels, token: req.session.token });
    },

    async show(req, res) {
        const id = req.params.id;
        if (!req.session.token) {
            return res.redirect('/login');
        }
        const level = await Level.findOne({
            where: { id: id },
        });

        res.render('level', { level, token: req.session.token });
    },

    async update(req, res) {
        const id = req.params.id;
        const name = req.body.name;

        // * Option 1 : On récupère le level et :
        // const level = await Level.findByPk(id);
        // *  on le met à jour directement
        // await level.update({ name: name });
        // * ou on le met à jour indirectement :
        // level.name = name;
        // * et on sauvegarde
        // await level.save();

        // * option 2 : la méthode statique qui nécessite le where
        await Level.update({ name }, { where: { id } });

        res.redirect(`/levels/${id}`);
    },

    /**
     * TODO : Trouver comment faire pour effacer des levels (CASCADE ?)
     * @param {object} req
     * @param {object} res
     */
    async destroy(req, res) {
        const id = req.params.id;

        const level = await Level.findByPk(id);
        level.destroy();

        res.redirect('/levels');
    },
};

module.exports = levelController;
