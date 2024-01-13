const CoreModel = require('./coreModel');
const client = require('../database/client');

class Level extends CoreModel {
    static table = 'level';
    name;

    /**
     *
     * @param {object} obj {name: string, id: number}
     */
    constructor(obj) {
        super(obj);

        if (typeof obj.name !== 'string') {
            // on "lève" une erreur => ça arrête tout !
            throw new Error('Level name must be a string!');
        }

        this.name = obj.name;
    }

    // * méthode static : c'est une méthode que l'on peut utiliser sans instancier la classe : le mot clé static permet de contourner le constructeur.
    // * Dans le cadre d'une méthode static, le mot clé this représente la classe
    // static async findAll() {
    //     const query = `SELECT * FROM "${this.table}";`;
    //     const result = await client.query(query);

    //     // * Pour chaque objets brut issus de la BDD, on s'en sert pour instancier la classe Level, on met toutes ces instances dans un tableau, et on retourne ce tableau à la place des objets bruts.
    //     // const levels = [];
    //     // for (const obj of result.rows) {
    //     //     const instance = new this(obj);

    //     //     levels.push(instance);
    //     // }

    //     // return levels;

    //     return result.rows.map(obj => new this(obj));
    // }

    // static async findById(id) {
    //     const query = {
    //         text: `SELECT * FROM ${this.table} WHERE id = $1`,
    //         values: [id],
    //     };

    //     const results = await client.query(query);

    //     if (results.rows[0]) {
    //         return new this(results.rows[0]);
    //     }

    //     return `La ressources demandée n'existe pas : 404`;
    // }

    static async create(name) {
        const query = {
            text: `INSERT INTO ${this.table} (name) VALUES ($1) RETURNING *`,
            values: [name],
        };

        const result = await client.query(query);

        return new this(result.rows[0]);
    }

    async update() {
        const query = {
            text: `UPDATE ${Level.table} SET name = $1, updated_at = $2 WHERE id = ${this.id} RETURNING *`,
            values: [this.name, new Date().toISOString()],
        };

        const result = await client.query(query);

        return new Level(result.rows[0]);
    }

    // * Contrôle surprise : faire une méthode static pour effacer un level
    async destroy() {
        const query = {
            text: `DELETE FROM ${Level.table} WHERE id = $1`,
            values: [this.id],
        };

        await client.query(query);

        return `La ressource demandée n'existe plus`;
    }
}

module.exports = Level;
