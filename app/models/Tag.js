const CoreModel = require('./CoreModel');

class Tag extends CoreModel {
    name;
    constructor(id, name, created_at, updated_at) {
        super(id, created_at, updated_at);
        this.name = name;
    }
}

module.exports = Tag;
