const CoreModel = require('./coreModel');
const client = require('../database/client');

class User extends CoreModel {
    static table = 'user';
    firstname;
    lastname;
    email;
    #password;

    constructor(obj) {
        super(obj);
        this.firstname = obj.firstname;
        this.lastname = obj.lastname;

        if (!this.validateEmail(obj.email)) {
            throw new Error('Email is not valid');
        }
        this.email = obj.email;
        // * on se sert du mutateur comme d'un propriété
        this.password = obj.password;
    }

    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }

    get password() {
        return this.#password;
    }
    // * mutateur : avec le préfixe set, on écrit une méthode qui permettra de modifier une propriété privée, on pourra se servir de cette méthode comme d'une propriété classique
    set password(password) {
        this.#password = password;
    }

    /**
     * https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript#46181
     * @param {string} emailString
     */
    validateEmail(emailString) {
        return String(emailString)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }

    // static async findAll() {
    //     const query = `SELECT * FROM "${this.table}";`;
    //     console.log(query);
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
            text: `UPDATE ${User.table} SET name = $1, updated_at = $2 WHERE id = ${this.id} RETURNING *`,
            values: [this.name, new Date().toISOString()],
        };

        const result = await client.query(query);

        return new User(result.rows[0]);
    }

    // * Contrôle surprise : faire une méthode static pour effacer un level
    async destroy() {
        const query = {
            text: `DELETE FROM ${User.table} WHERE id = $1`,
            values: [this.id],
        };

        await client.query(query);

        return `La ressource demandée n'existe plus`;
    }
}

module.exports = User;
