const CoreModel = require('./coreModel');

class Tag extends CoreModel {
    static table = 'tag';
    name;

    constructor(obj) {
        super(obj);
        this.name = obj.name;
    }
}

module.exports = Tag;
