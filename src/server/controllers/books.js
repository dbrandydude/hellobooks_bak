const Book = require('../db/models').Book;

/* Add book */
const create = (req, res) => {
    return Book
        .create({
            title: req.body.title
        })
        .then(books => res.status(201).send(books))
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
        .then(books => res.status(200).send(books))
        .catch(err => res.status(400).send(err));
};

module.exports = {
    create,
    update,
    retrieveAll
};
