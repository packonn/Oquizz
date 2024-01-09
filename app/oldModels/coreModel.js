const client = require('../data/client');

class CoreModel {
    static table;
    #id;
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
    static async creates(data) {
        const columns = Object.keys(data).join(', ');
        const values = Object.values(data);
        const placeholders = values.map((_, i) => `$${i + 1}`).join(', ');
        const query = {
            text: `INSERT INTO "${this.table}" (${columns}) VALUES (${placeholders}) RETURNING *`,
            values,
        };
        const result = await client.query(query);
        return new this(result.rows[0]);
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
    async update(updateData) {
        const column = Object.keys(updateData)
            .map((key, index) => `"${key}" = $${index + 1}`)
            .join(', ');
        const values = Object.values(updateData);
        const query = {
            text: `UPDATE "${
                this.constructor.table
            }" SET ${column} WHERE id = $${values.length + 1} RETURNING *`,
            values: [...values, this.id],
        };
        const result = await client.query(query);
        return new this.constructor(result.rows[0]);
    }
    async destroy() {
        const query = {
            text: `DELETE FROM "${this.constructor.table}" WHERE id = $1`,
            values: [this.id],
        };
        await client.query(query);
        return `La ressource demandée n'existe plus`;
    }
}

module.exports = CoreModel;
