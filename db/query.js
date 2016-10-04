var knex = require('./knex.js');

function Books() {
  return knex('book');
}

function AddBook(title, genre, description, cover) {
  return knex('book').insert({
    title:title,
    genre:genre,
    description:description,
    cover:cover,
  })
}

module.exports = {
  getAllBooks: Books,
  addBook: AddBook,
}
