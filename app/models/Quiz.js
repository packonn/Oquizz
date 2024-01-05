const CoreModel = require('./CoreModel');

class Quiz extends CoreModel {
    title;
    description;
    user_id;
    constructor(id, title, description, user_id, created_at, updated_at) {
        super(id, created_at, updated_at);
        this.title = title;
        this.description = description;
        this.user_id = user_id;
    }
}
module.exports = Quiz;
