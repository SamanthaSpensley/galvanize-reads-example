var knex = require('./knex.js');

function Books() {
  return knex('book');
}

module.exports = {
  getAllBooks: Books,
}
