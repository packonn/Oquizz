const CoreModel = require('./coreModel');

class Answer extends CoreModel {
    static table = 'answer';
    description;
    question_id;

    constructor(obj) {
        super(obj);
        this.description = obj.description;
        this.question_id = obj.question_id;
    }
}

module.exports = Answer;
