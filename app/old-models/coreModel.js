const client = require('../database/client');

class CoreModel {
    #id;
    static table;
    created_at;
    updated_at;

    constructor(obj) {
        if (typeof parseInt(obj.id) !== 'number') {
            // on "lève" une erreur => ça arrête tout !
            throw new Error('Id must be a number!');
        }

        this.id = parseInt(obj.id);
        this.created_at = obj.created_at;
        this.updated_at = obj.updated_at;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    static async findAll() {
        const query = `SELECT * FROM "${this.table}";`;

        const result = await client.query(query);

        return result.rows.map(obj => new this(obj));
    }

    static async findById(id) {
        const query = {
            text: `SELECT * FROM "${this.table}" WHERE id = $1`,
            values: [id],
        };

        const results = await client.query(query);

        if (results.rows[0]) {
            return new this(results.rows[0]);
        }

        return `La ressources demandée n'existe pas : 404`;
    }
}

module.exports = CoreModel;
