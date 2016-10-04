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

router.get('/:id', (req, res, next) => {
  query.getBookById(req.params.id)
  .then((book) => {
    console.log(book);
    res.render('list_books', {
      book:book
    })
  })
})

router.get('/new', (req, res, next) => {
  res.render('add_book')
});

router.post('/', (req, res, next) => {
  query.addBook(req.body.title, req.body.genre, req.body.description, req.body.cover)
  .then(() => {
    res.redirect('/books')
  })
})

router.get('/delete/:id', (req, res, next) => {
  query.getBookById(req.params.id)
  .then((book) =>{
    res.render('delete_book', {
      book:book[0]
    });
  })
})

router.delete('/:id', (req, res, next) => {
  query.deleteBook(req.params.id)
  .then(() => {
    res.redirect('/books')
  })
})

router.get('/edit/:id', (req, res, next) => {
  query.getBookById(req.params.id)
  .then((book) => {
    res.render('edit_book', {
      book:book[0]
    })
  })
})

router.put('/:id', (req, res, next) => {
  query.editBook(req.params.id, req.body.title, req.body.genre, req.body.description, req.body.cover)
  .then(() => {
    res.redirect('/books')
  })
})


module.exports = router;
