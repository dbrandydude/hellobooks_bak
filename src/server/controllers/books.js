const Book = require('../db/models').Book;

/* Add book */
const create = (req, res) => {
    return Book
        .create({
            title: req.body.title
        })
        .then(book => res.status(201).send(book))
        .catch(err => res.status(400).send(err));
};

/* Update book */
const update = (req, res) => {
    const id = parseInt(req.params.bookId),
        title = req.body.title;

    return Book
        .findById(id)
        .then(book => {
            if (!book) {
                res.status(404)
                    .send({
                        message: 'Not found'
                    });
            }
            return book
                .update({ title })
                .then(() => {
                    res.status(200).send(book);
                })
                .catch(err => res.status(400).send(err));
        });
};

/* Retrieve all books */
const retrieveAll = (req, res) => {
    return Book
        .all()
        .then(book => res.status(200).send(book))
        .catch(err => res.status(400).send(err));
};

/* Retrieve a book */
const retrieve = (req, res) => {
    return Book
        .findById(req.params.bookId)
        .then(book => res.status(200).send(book))
        .catch(err => res.status(400).send(err));
};

module.exports = {
    create,
    update,
    retrieveAll,
    retrieve
};
