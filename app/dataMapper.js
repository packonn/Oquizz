const client = require('./database/client');

const dataMapper = {
    async getAllLevels() {
        const sql = `SELECT * FROM level`;
        const result = await client.query(sql);

        return result.rows;
    },

    async getLevelById(id) {
        // placeholder : caractère générique/caractère de remplissage
        // ! $1 est placeholder qui sert à dire à PG de faire une requête préparée, afin d'éviter des injections SQL
        const query = {
            text: `SELECT * FROM "level" WHERE id = $1`,
            values: [id],
        };

        const results = await client.query(query);

        if (results.rows[0]) {
            return results.rows[0];
        }

        return `La ressources demandée n'existe pas : 404`;
    },
};

module.exports = dataMapper;
