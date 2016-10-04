var express = require('express');
var router = express.Router();
var query = require('../db/query');
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', (req, res, next) => {
  query.getAllBooks()
  .then(function(book) {
    res.render('list_books', {
      book: book
    })
  })
});

router.get('/new', (req, res, next) => {
  res.render('add_book')
});

router.post('/', (req, res, next) => {
  query.addBook(req.body.title, req.body.genre, req.body.description, req.body.cover)
  .then(() => {
    res.redirect('/books')
  })
})

module.exports = router;
