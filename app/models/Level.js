const CoreModel = require('./coreModel');

class Level extends CoreModel {
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
}

module.exports = Level;
