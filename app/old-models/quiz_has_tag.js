const CoreModel = require('./coreModel');

class QuizHasTag extends CoreModel {
    quiz_id;
    tag_id;

    constructor(obj) {
        super(obj.id);
        this.quiz_id = obj.quiz_id;
        this.tag_id = obj.tag_id;
    }
}

module.exports = QuizHasTag;
