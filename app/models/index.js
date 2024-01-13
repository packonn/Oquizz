const Quiz = require('./quiz');
const Answer = require('./answer');
const Question = require('./question');
const QuizHasTag = require('./quizHasTag');
const User = require('./user');
const Level = require('./level');
const Tag = require('./tag');

// ! Les associations :-o
// ! quiz (id, title, description, #user(id))

// Quiz et User sont associés : Quelle est le type d'assoc ?
// - one-to-one
// - one-to-many
// - many-to-many

// * association one-to-many
User.hasMany(Quiz, {
    foreignKey: 'user_id',
    // ! on définit un alias, dont on se servira pour faire des requêtes avec eager loading
    as: 'quizzes',
});

// * association réciproque : belongsTo
Quiz.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'author',
});

// * Question et Answer
Question.hasMany(Answer, {
    foreignKey: 'question_id',
    as: 'answers',
});

// * La bonne réponse
// Question.belongsTo(Answer, {
//     foreignKey: 'answer_id',
//     as: 'good_answer',
// });

Answer.belongsTo(Question, {
    foreignKey: 'question_id',
    as: 'question',
});
// * William C pas d'alias
// Answer.hasOne(Question, { foreignKey: 'answer_id' });

// * Question et Level
Level.hasMany(Question, {
    foreignKey: 'level_id',
    as: 'questions',
});

// Grégoire D
Question.belongsTo(Level, {
    foreignKey: 'level_id',
    as: 'level',
});

// *  Question et Quiz
Quiz.hasMany(Question, {
    foreignKey: 'quiz_id',
    as: 'questions',
});

Question.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
    as: 'quiz',
});

// * Quiz et Tag
Quiz.belongsToMany(Tag, {
    through: QuizHasTag,
    as: 'tags',
    foreignKey: 'quiz_id',
    otherKey: 'tag_id',
});

Tag.belongsToMany(Quiz, {
    through: QuizHasTag,
    as: 'quizList',
    foreignKey: 'tag_id',
    otherKey: 'quiz_id',
});

module.exports = { Quiz, Answer, Question, User, Level, Tag, QuizHasTag };
