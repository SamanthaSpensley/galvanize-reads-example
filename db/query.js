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

function EditBook(id, title, genre, description, cover) {
  return knex('book').where('id', id).update({
    title:title,
    genre:genre,
    description:description,
    cover:cover,
  })
}

module.exports = {
  getAllBooks: Books,
  getBookById: GetBookById,
  addBook: AddBook,
  deleteBook: DeleteBook,
  editBook: EditBook,
}
