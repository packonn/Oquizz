const CoreModel = require('./CoreModel');

class Answer extends CoreModel {
    description;
    question_id;
    constructor(id, description, question_id, created_at, updated_at) {
        super(id, description, question_id, created_at, updated_at);
        this.description = description;
        this.question_id = question_id;
    }
}

module.exports = Answer;
