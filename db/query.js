var knex = require('./knex.js');

function Books() {
  return knex('book');
}

function GetBookById(id) {
  return knex('book').where('id', id)
}

function AddBook(title, genre, description, cover) {
  return knex('book').insert({
    title:title,
    genre:genre,
    description:description,
    cover:cover,
  })
}

function DeleteBook(id) {
  return knex('book').where('id', id).del()
}

module.exports = {
  getAllBooks: Books,
  getBookById: GetBookById,
  addBook: AddBook,
  deleteBook: DeleteBook,
}
