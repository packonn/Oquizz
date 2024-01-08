class CoreModel {
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
}

module.exports = CoreModel;
