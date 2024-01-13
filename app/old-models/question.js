const CoreModel = require('./coreModel');

class Question extends CoreModel {
    static table = 'question';
    description;
    anecdote;
    wiki;
    level_id;
    quiz_id;
    answer_id;

    constructor(obj) {
        super(obj);
        this.description = obj.description;
        this.anecdote = obj.anecdote;
        this.wiki = obj.wiki;
        this.level_id = obj.level_id;
        this.quiz_id = obj.quiz_id;
        this.answer_id = obj.answer_id;
    }
}

module.exports = Question;
