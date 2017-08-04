const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');
const usersController = require('../controllers/users');
const booksController = require('../controllers/books');

router.get('/', function(req, res, next) {
    const renderObject = {};
    renderObject.title = 'Welcome to Express!';
    indexController.sum(1, 2, (error, results) => {
        if (error) return next(error);
        if (results) {
            renderObject.sum = results;
            res.render('index', renderObject);
        }
    });
});
// router.post('/api/users', usersController.create);
// router.get('/api/users', usersController.retrieveAll);
// router.post('/api/users/:userId/books', booksController.create);

module.exports = router;
