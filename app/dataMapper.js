const client = require('./data/client');

const dataMapper = {
    async getAllLevel() {
        const query = `SELECT * FROM level`;
        const result = await client.query(query);

        return result.rows;
    },
    async getLevelById(id) {
        const query = {
            text: `SELECT * FROM level WHERE id= $1`,
            values: [id],
        };
        const result = await client.query(query);
        if (result.rows[0]) {
            return result.rows[0];
        }
        return `la resource demander n'existe pas`;
    },
};

module.exports = dataMapper;
