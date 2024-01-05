const CoreModel = require('./CoreModel');

class Question extends CoreModel {
    question;
    anecdote;
    level_id;
    answer_id;
    quiz_id;
    constructor(
        id,
        question,
        anecdote,
        level_id,
        answer_id,
        quiz_id,
        created_at,
        updated_at
    ) {
        super(id, created_at, updated_at);
        this.question = question;
        this.anecdote = anecdote;
        this.level_id = level_id;
        this.answer_id = answer_id;
        this.quiz_id = quiz_id;
    }
}
module.exports = Question;
