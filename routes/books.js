var express = require('express');
var router = express.Router();
var query = require('../db/query');
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
  query.getAllBooks()
  .then(function(book) {
    res.render('list_books', {
      book: book
    })
  })
});

module.exports = router;
