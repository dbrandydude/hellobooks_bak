const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');
const booksController = require('../controllers/books');

/* GET users get all books */
// router.get('/users', usersController.retrieveAll);

/* POST add book */
router.post('/books', booksController.create);

/* GET retrieveAll all books */
router.get('/books', booksController.retrieveAll);

/* PUT modify book */
router.put('/books/:bookId', booksController.update);

module.exports = router;
