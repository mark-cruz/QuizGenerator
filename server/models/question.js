const Sequelize = require('sequelize');
const db = require('./db');

const Question = db.define('question', {
  question: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
});

module.exports = Question;
